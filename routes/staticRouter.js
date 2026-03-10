import express from 'express';


// specific Routing page for Rendering 

const router  = express.Router();

router.get('/homepage' , async(req,res) => {
   const AllUrls = await Userurl.find({});
      // console.log('urls -',AllUrls);
   return res.render('home',{
       urls : AllUrls});
});

router.get('/signup' , (req,res) => {
  return  res.render("signup");
});


router.get('/login' , (req,res) => {
  return  res.render("login");
})

export default router;