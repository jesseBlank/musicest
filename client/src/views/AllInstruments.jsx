import { useEffect, useState } from "react";
import InstrumentList from "../components/InstrumentList";
import { getAllProducts } from "../services/ProductServices";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom";

const AllInstruments = () => {
    const [products, setProducts] = useState([]);

    const {type} = useParams();

    useEffect(() => {
        getAllProducts()
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    console.log(products);
    return (

        <div>
            <Navbar />

            <InstrumentList products={products.filter(product => product.type.toLowerCase() === type.toLowerCase())} />

            <Footer />
        </div>

    )
}

export default AllInstruments;