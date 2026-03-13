import express from "express";
import { changePassword, loginSQL, profileSQL, register, updateProfile } from "../controllers/users.controller.js";
import { usersMiddleware } from "../middlewares/users.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginSQL);
router.get("/profile", usersMiddleware, profileSQL);
router.put("/profile", usersMiddleware, updateProfile);
router.put("/change/password", usersMiddleware, changePassword);
export default router;