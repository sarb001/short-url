import express from 'express';
import { HandlercreateNewURL } from '../controllers/urlcontroller.js';

const router  = express.Router();

router.get('/createurl' , HandlercreateNewURL);


export default router;