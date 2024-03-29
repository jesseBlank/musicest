import express from 'express';
import cors from 'cors';
import passportSetup from "./config/passport.config.js"
import session from 'express-session';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/product.routes.js';
import userRouter from './routes/user.routes.js';
import passport from 'passport';

const app = express();
app.use(
    express.json(),
    cors({ credentials: true, origin: "http://localhost:5173" }),
    express.urlencoded({ extended: true }),
    session({
        resave: false,
        saveUninitialized: false,
        name: "AuthCookie",
        secret: process.env.COOKIE_SECRET,
        cookie: { secure: process.envMODE === "production" },
    }),
    passport.initialize(),
    passport.session()
);
app.use("/api/auth", userRouter);
app.use("/api", router);
dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);