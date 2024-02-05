// orderRoutes.js
import express from 'express';
import { createOrder, getOrderByUser } from '../controllers/ordercontroller.js';

const router = express.Router();


router.post('/order', createOrder);

router.get('/order', getOrderByUser);

export default router;