import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SimpleSlider from "../components/Carousel";
import accessories from "../assets/accessories.jpeg"
import drums from "../assets/drums.webp"
import guitarWall from "../assets/guitarWall.jpeg"
import pianos from "../assets/pianos.jpeg"
import homeStudio from "../assets/homeStudio.webp"
import Footer from "../components/Footer";


const Home = () => {

    return (
        <div>
            <Navbar />
            <SimpleSlider />
            <br />
            <h1 className="text-center text-3xl">Shop Musicest by Category!</h1>
            <br />
            <div className="flex justify-center gap-20">
                <div>
                    <Link to="/instruments/guitar">
                        <h3 className="text-center text-xl mb-5">Guitars</h3>
                        <img className="categories" src={guitarWall} alt="guitars" />
                    </Link>
                </div>
                <div>
                    <Link to="/instruments/piano">
                        <h3 className="text-center text-xl mb-5">Pianos</h3>
                        <img className="categories h-52" src={pianos} alt="pianos" />
                    </Link>
                </div>
                <div>
                    <Link to="/instruments/drums">
                        <h3 className="text-center text-xl mb-5">Drums</h3>
                        <img className="categories h-52" src={drums} alt="drums" />
                    </Link>
                </div>
                <div>
                    <h3 className="text-center text-xl mb-5">Accessories</h3>
                    <img className="categories h-52" src={accessories} alt="accessories" />
                </div>
            </div>

            <div className=" my-10">
                <h3 className="text-center text-3xl">Shop at Musicest for all home studio needs!</h3>
                <div className="flex mt-10 bg-amber-300">
                    <img className="m-auto" src={homeStudio} alt="studio" />
                    <p className="text-2xl text-center p-10 my-auto">All home recording gear on sale now for 20% off.</p>
                </div>
            </div>

            <div className="bg-fuchsia-300 p-5">
                <h1 className="text-center text-3xl">What is Musicest?</h1>
                <br />
                <div className="flex gap-10">
                    <div>
                        <h3 className="text-center text-xl">A community in harmony</h3>
                        <p className="mt-5">Musicest is a fake global online instrument marketplace. It is a project idea to help me get better at styling a professional website. The fake idea is to have a musical community where people can go and buy and sell used musical instruments.</p>
                    </div>
                    <div>
                        <h3 className="text-center text-xl">Support independent musicians</h3>
                        <p className="mt-5">Everybody knows buying new musical instruments isn't a great experience. Its expensive and similar to buying a car. At Musicest, you can buy somebody's guitar that has a history and has been loved and played by another fellow musician.</p>
                    </div>
                    <div>
                        <h3 className="text-center text-xl">Peace of mind</h3>
                        <p className="mt-5">Your privacy is the highest priority of our dedicated team. And if you ever need asssitance, we are always ready to step in for support.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )

}

export default Home;