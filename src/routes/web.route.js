import express from "express";
import { webProduct } from "../controllers/products.controller.js";
import { loginSQLweb, loginSQLwebApi } from "../controllers/users.controller.js";
const router = express.Router();

router.get("/", webProduct);
router.get('/login', loginSQLweb);
router.post('/login', loginSQLwebApi);
export default router;