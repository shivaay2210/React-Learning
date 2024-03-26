import React from "react";
import UserContext from "./UserContext";


// children par basically wrapping ho rhi h jo children mai hoga as it is show hoga similar to outlet

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    // const obj = {user: user, setUser: setUser}
    const obj = {user, setUser}

    return(
        // value needs an object 
        // <UserContext.Provider value={{user, setUser}}>
        <UserContext.Provider value={obj}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider