
import { useState, useEffect } from "react";
import { Context, logout, getUser } from "../services/UserServices";

const MyContext = ({children}) => {
    const [user, setUser] = useState(null);

    const logoutUser = () => {
        logout()
        .then(() => {
            setUser(null)
        });
    }
    
    useEffect(() => {
        if(user) return;
        getUser()
        .then((data) => {
            setUser(data)
        })
    }, [user])

    return (
        <Context.Provider value={{ user, logoutUser }}>
            {children}
        </Context.Provider>
    )

}

export default MyContext;

