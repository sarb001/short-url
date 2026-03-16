import express from 'express';
import { AnalyticsHandler, HandlercreateNewURL } from '../controllers/urlcontroller.js';
import { Userurl } from '../models/url.js';

const router  = express.Router();


router.post('/createurl' , HandlercreateNewURL);

router.get('/:shortid' ,  async(req,res) => {
      const paramsid = req.params.shortid;
      console.log('param id -',paramsid);
 
      if(!paramsid) return res.status(400).json({ message : "Params id is  required " })
 
       const UpdateUrl = await Userurl.findOneAndUpdate({
           shorturl : paramsid
      },{
         $push : { visitHistory : { timestamps : Date.now()  } },
        },
         {
             upsert : true,
      });
 
    console.log('Updated URL -',UpdateUrl);
    res.redirect(UpdateUrl.mainurl);
});

router.get('/analytics/:shortid' ,AnalyticsHandler);


export default router;