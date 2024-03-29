import passport from 'passport';
import dotenv from 'dotenv';
import User from '../models/user.model.js';

dotenv.config();

const loggedUser = (req, res) => res.json(req.user);

const googleLogin = passport.authenticate("google", {scope: ["profile"], successRedirect: "http://localhost:5173/"});

const logout = async (req, res) => req.logout(() => res.json({ message: "success" }));

//! Update function
const updateUser = async (req, res) => {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedUser);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

const deleteUser = async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser)
}

export { loggedUser, googleLogin, logout, updateUser, deleteUser}