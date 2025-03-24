import express from 'express';
import {forgotPassword, resetPassword, userLogin, userLogout, userSignup} from '../controllers/authcontroller.js';


export const router = express.Router();

//signuproutes
router.post('/signup', userSignup);

router.post("/login", userLogin)

router.get('/logout',userLogout)
// Forgot Password
router.post("/forgot-password", forgotPassword);

// Reset Password
router.post("/reset-password/:token", resetPassword);


