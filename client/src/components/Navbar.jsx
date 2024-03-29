import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"
import search from "../assets/search.png"
import { useAuthContext } from "../services/UserServices";

const Navbar = () => {
    const { user, logoutUser } = useAuthContext();
    console.log(user);

    return (
        <div >
            <div className="flex items-center p-2 mx-16">
                <div className="flex items-center">
                    <img className="w-12" src={logo} alt="logo" />
                    <h1 className="text-2xl">
                        <Link to="/">Musicest</Link>
                    </h1>
                </div>
                <div className="flex m-auto">
                    <input className="border-2 rounded-md p-2" style={{ width: 700 }} type="text" placeholder="Search for anything" />
                    <img className="w-10 bg-red-300 rounded-lg hover:bg-red-500 p-2" style={{ marginLeft: -40 }} src={search} alt="search" />
                </div>
                <div className="gap-5 flex">
                    <div className="flex items-center gap-10">
                        {user ?
                        <>
                        <img className="w-8 rounded-full" src={user.picture} alt="profile picture" />
                        <p style={{marginLeft: -30}}>{user.username}</p> 
                        </>: 
                        
                        <a href="http://localhost:8000/api/auth/google" className="hover:bg-slate-200 rounded-lg p-2">Sign in with Google!</a>}
                        <button onClick={logoutUser}>Logout</button>
                    </div>
                </div>
            </div>

            <div className="mx-16">
                <ul className="flex justify-center gap-32 mt-5 pb-5 border-b-2">
                    <li>
                        <Link to="/instruments/guitar">Guitars</Link>
                    </li>
                    <li>
                        <Link to="/instruments/piano">Pianos</Link>
                    </li>
                    <li>
                        <Link to="/instruments/drums">Drums</Link>
                    </li>
                    <li>Accessories</li>
                    <li>Clearance</li>
                    <li>About</li>
                </ul>
            </div>

        </div>
    )

}

export default Navbar;