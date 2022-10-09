var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessSchema = new Schema({
    businessCode: String,
    businessName: String,
    email: String,
    password: String,


})

const Business = mongoose.model('Business', businessSchema)

module.exports = Business