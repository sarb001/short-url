import express from 'express';
import { Userurl } from '../models/url.js';
import { checkauth } from '../middleware/auth.js';


// specific Routing page for Rendering  

// like Frontend 

const router  = express.Router();

router.get('/homepage' ,checkauth ,  async(req,res) => {

   const mainuser  = req.user;
   console.log( 'mainuser -',mainuser);
  //  get urls by specfic User 
   const AllUrls = await Userurl.find({ createdBy :  mainuser?.id });
      console.log('urls -',AllUrls);
   return res.render('home',{
       urls : AllUrls});
});


export default router;