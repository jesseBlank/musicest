import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import drumBanner from "../assets/drumBanner.png"
import gibson2 from "../assets/gibson2.webp"
import acoustic from "../assets/acoustic.jpeg"
import studioBanner from "../assets/studioBanner.jpeg"


export default function SimpleSlider() {

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide m-auto h-96" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="bg-black flex h-96">
                        <img src={acoustic} className="d-block h-96" alt="acoustic" />
                        <p className="text-white p-5 text-xl m-auto my-32">Shop here for most acoustic guitar needs!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex bg-red-900 h-96">
                        <img src={studioBanner} className="d-block" alt="studio" />
                        <p className="p-5 text-xl my-auto text-white">One stop shop to create your dream home recording studio.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex bg-black">
                        <p className="text-white p-5 text-xl my-auto">The most popular drum kit brands!</p>
                        <img src={drumBanner} className="d-block h-96" alt="drums" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex bg-amber-300 h-96">
                        <p className="p-5 text-xl my-auto">Gibson, Fender, PRS and many more!</p>
                        <img src={gibson2} className="d-block" alt="gibson" />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}