import express from 'express';
import { HandlercreateNewURL, HandlerRidrectURL } from '../controllers/urlcontroller.js';

const router  = express.Router();

router.get('/createurl' , HandlercreateNewURL);

router.get('/:shortid' , HandlerRidrectURL);


export default router;