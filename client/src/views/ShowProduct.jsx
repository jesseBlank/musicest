import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getOneProduct } from "../services/ProductServices";

const ShowProduct = () => {
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState([])

    const { id } = useParams();
    // console.log(id)

    useEffect(() => {
        getOneProduct(id)
            .then((res) => {
                setProduct(res);
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    if (!product) return <p>...loading</p>
    return (
        <div>
            <Navbar />

            <div className="bg-white">
                <div className="pt-6">

                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img src={product.image} alt="guitar" className="h-full w-full object-cover object-center" />
                        </div>
                    </div>

                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.brand}</h1>
                            <h2 className="text-2xl tracking-tight text-gray-900 sm:text-3xl">{product.model}</h2>
                        </div>

                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>

                            <form className="mt-10">
                                <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to cart</button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )

}

export default ShowProduct;