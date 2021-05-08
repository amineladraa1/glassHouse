import express from "express";
import { signIn, signUp } from "../controlers/userControl.js";

const router = express.Router();

// router.post("/signin", signin);
router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;
