import express from 'express';
import userSignup from '../controllers/authcontroller.js';

const route = express.Router();

//signuproutes
route.post('/signup', userSignup)



module.exports=route;