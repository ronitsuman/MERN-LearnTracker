import express from 'express';
import {userLogin, userLogout, userSignup} from '../controllers/authcontroller.js';


export const router = express.Router();

//signuproutes
router.post('/signup', userSignup);

router.post("/login", userLogin)

router.get('/logout',userLogout)


