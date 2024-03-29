import Product from "../models/product.model.js";

//! Create Function
export const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

//! Read Functions
export const readAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.json(allProducts)
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

export const readOneProduct = async (req, res) => {
    try {
        const theProduct = await Product.findById(req.params.id);
        res.json(theProduct);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

//! Update Function
export const updateProduct = async (req, res) => {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedProduct);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

//! Delete Function
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.json(deletedProduct);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}