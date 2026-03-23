import express from "express";
import { addProduct, getProduct, productDetail } from "../controllers/products.controller.js";
import multer from "multer";
import { storage } from "../helpers/cloudinary.helper.js";

const router = express.Router();
const upload = multer({
    storage: storage 
})
router.get("/list", getProduct);
router.get("/detail/:id", productDetail);

router.post('/create', upload.single('image'), addProduct);
export default router;