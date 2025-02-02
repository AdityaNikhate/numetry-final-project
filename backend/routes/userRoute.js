import express from "express"
import { forgotPassword, login, logout, register } from "../controllers/userController.js";

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.post('/changepass', forgotPassword)

export default router;