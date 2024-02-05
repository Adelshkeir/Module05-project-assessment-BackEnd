import express from 'express';
const router = express.Router();
import productController from '../controllers/productcontroller.js';
import { authenticateUser, checkUserRole } from '../middlewares/authentication.js';
import upload from "../middlewares/multer.js";
router.get('products/', productController.getAllProducts);
router.get('products/:id', productController.getProductById);
router.post('products/add', authenticateUser, checkUserRole('admin'),upload.single("Image"), productController.addProduct);
router.put('products/update', authenticateUser, checkUserRole('admin'), productController.updateProduct);
router.delete('products/:id', authenticateUser, checkUserRole('admin'), productController.deleteProduct);


export default router;