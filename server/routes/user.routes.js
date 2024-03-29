import { Router } from 'express';
import { loggedUser, googleLogin, logout, updateUser, deleteUser } from '../controllers/user.controller.js';

const router = Router();

router.route("/")
.get(loggedUser)
.delete(logout)

router.route("/google")
.get(googleLogin)
.put(updateUser)

router.route("/:id")
.delete(deleteUser)

export default router;