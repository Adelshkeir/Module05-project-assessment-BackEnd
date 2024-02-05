
import express from 'express';
import { registerUser, loginUser,getAllUsers } from '../controllers/usercontroller.js';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);
export default router;