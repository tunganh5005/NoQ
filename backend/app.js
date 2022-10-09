const express = require('express');
const app = express();

const bcrypt = require("bcryptjs")


var cors = require('cors')

var http = require('http').createServer(app)

const io = require("socket.io")(http);

const mongoose = require('mongoose')


const User = require('./schema/User')

const Business = require('./schema/Business')


app.use(cors())

app.use(express.json())


mongoose.connect('mongodb://localhost:27017/NoQ', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('DATABASE CONNECTED!')
    })
    .catch(() => {
        console.log("FAILED TO CONNECT!")
    })


  

app.post('/newuser', (req, res, next) => {
    const newUser = new User({name: req.body.username})
    newUser.save()
    res.json({userNo: newUser._id})
})



app.post('/newbusiness', async (req, res, next) => {
    const {businessName, businessCode, email, password} = req.body

    const match = await Business.find({email: email})
    if(match.length != 0){
        res.status(400).json({businessName: null})
    }
    const hashPassword = await bcrypt.hash(password, 12)
    const newBusiness = new Business({businessName: businessName, businessCode: businessCode, businessCode: businessCode, password: hashPassword, email:email})
    newBusiness.save()
    res.json({businessName: businessName})
})




const PORT = 8080;



io.on("connection", (socket) => {
    console.log('new client connected');
    socket.on("sendUserNo", async (userNo) => {
        console.log(userNo)
        const currentUser = await User.findById(userNo)
        socket.emit('returnUserName', currentUser.name)
    });
});


http.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
});