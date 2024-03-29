import { model, Schema } from 'mongoose';

const ProductSchema = new Schema (
    {
        type: {
            type: String,
            required: [true, "Title is required!"]
        },
        brand: {
            type: String,
            required: [true, "Brand is required!"]
        },
        model: {
            type: String,
            required: [true, "Model is required!"]
        },
        rating: {
            type: Number,
            required: [true, "Rating is required!"]
        },
        price: {
            type: Number,
            required: [true, "Price is required!"]
        },
        image: {
            type: String,
            required: [true, "Image is required!"]
        },
        description: {
            type: String,
            required: [false]
        }
    },
    { timestamps: true }
)

const Product = model("Product", ProductSchema);

export default Product;