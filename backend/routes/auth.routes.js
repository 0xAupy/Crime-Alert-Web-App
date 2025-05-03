import express from "express";
import {
  register,
  login,
  logout,
  getAuthUser,
  sendVerifyOtp,
  verifyEmail,
} from "../controllers/auth.controller.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

//register route
router.post("/register", register);
//login route
router.post("/login", login);
//logout route
router.get("/logout", logout);
//get auth user route
router.get("/me", protectRoute, getAuthUser);
//send verification otp
router.post("/send-verify-otp", protectRoute, sendVerifyOtp);
//verify email route
router.post("/verify-account", protectRoute, verifyEmail);

export default router;
