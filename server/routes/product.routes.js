import {Router} from 'express';
import { createProduct, readAllProducts, readOneProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = Router();

//! Create, Read All
router.route("/products")
.post(createProduct)
.get(readAllProducts)

//! Read One, Update, Delete
router.route("/products/:id")
.get(readOneProduct)
.put(updateProduct)
.delete(deleteProduct)




export default router;