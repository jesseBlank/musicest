import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div>
            <ul className="flex justify-center gap-52 my-10">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <li>English</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Regions</li>
            </ul>
        </div>
    )

}

export default Footer;