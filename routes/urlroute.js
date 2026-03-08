import express from 'express';
import { AnalyticsHandler, HandlercreateNewURL, HandlerRidrectURL } from '../controllers/urlcontroller.js';

const router  = express.Router();

router.get('/createurl' , HandlercreateNewURL);

router.get('/url/:shortid' , HandlerRidrectURL);

router.get('/analytics/:shortid' ,AnalyticsHandler);


export default router;