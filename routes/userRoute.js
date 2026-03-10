import express from 'express';
import { usersignup , userlogin } from '../controllers/usercontroller.js';

const router  = express.Router();

router.get('/signup',usersignup);

router.post('/login',userlogin);

export default router;