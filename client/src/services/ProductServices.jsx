import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

async function getAllProducts() {
    try {
        const res = await http.get('/products');
        return res.data;
    } catch (err) {
        throw err;
    }
}

async function getOneProduct(id) {
    try {
        const res = await http.get(`/products/${id}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export {
    getAllProducts,
    getOneProduct
}