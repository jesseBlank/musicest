import { Schema, model } from "mongoose";
import Product from "./product.model.js";

const UserSchema = new Schema(
    {
        username: {
            type: String, 
            required: [true, "Username is required!"]
        },
        picture: {
            type: String
        },
        cart: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }],
        googleId: String
    },
    { timestamps: true }
)

const User = model("User", UserSchema);

export default User;