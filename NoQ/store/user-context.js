

import { createContext, useState } from "react";


export const UserContext = createContext({
    username: "jhvjh",
    changeUsername: (name) => {}
})

function UserContextPovider({children}){

    const [ username,  setUsername] = useState("hjvj")

    function changeUsername(name){
        setUsername(name)
    }
    
    const value = {
        username: username,
        changeUsername: changeUsername
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


export default UserContextPovider