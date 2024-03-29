import { Strategy as GoogleStrategy } from "passport-google-oauth2";

import passport from 'passport';
import User from '../models/user.model.js';
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google",
    }, async function verify(accessToken, refreshToken, profile, cb){
        console.log(profile)
        let user = await User.findOne({ googleId: profile.id });
        user ??= await User.create({ googleId: profile.id, username: profile.displayName, picture: profile.picture });
        return cb(null, user);
    }
));

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { _id: user._id })
    });
});

passport.deserializeUser(function (serializeUser, cb) {
    process.nextTick(async function () {
        const user = await User.findById(serializeUser._id);
        return cb(null, user);
    });
});

export default passport;