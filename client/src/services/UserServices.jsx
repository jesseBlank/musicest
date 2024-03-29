import axios from "axios";
import { useContext, createContext } from "react";

const Context = createContext();

const useAuthContext = () => useContext(Context);


const http = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true
});

async function getUser() {
    try {
        const res = await http.get('/auth');
        console.log("inservice", res, res.data)
        return res.data;
    } catch(err){
        throw err;
    }
}

async function logout() {
    try {
        const res = await http.delete('/auth');
        return res.data;
    } catch(err) {
        throw err;
    }
}


export {
    Context,
    useAuthContext,
    getUser,
    logout
}