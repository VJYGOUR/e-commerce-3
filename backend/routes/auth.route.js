import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";
const router = express.Router();
router.post("/signup", signup);
router.get("/login", login);

router.get("/logout", logout);
export default router;
