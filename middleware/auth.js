import express from 'express';
import { getUser } from '../service/serviceauth.js';

// async function authmiddleware(req,res,next){
 
//     const userid = req.cookies?.uid;                          
//     console.log('userid -',userid);
//     if(!userid)   return res.redirect('/login');      // no cookies found

//     console.log('after login =-')
//     const user = getUser(userid);                    // checking user
//     console.log('user in db -',user);
//     if(!user) return  res.redirect('/login');        // no user found 

//     console.log('user assgn');
//     req.user = user;
//     next();
// }


// async function authmiddleware(req,res,next){
 
//     const usertoken = req.cookies?.token;                          
//     console.log('user jwt token -',usertoken);
//     if(!usertoken)   return res.redirect('/login');      // no cookies found

//     console.log('after login =-')
//     const user = getUser(usertoken);                    // checking user
//     if(!user) return  res.redirect('/login');        // no user found 

//     console.log('user assgn');
//     req.user = user;
//     next();
// }

// Do it with headers => 

// async function authmiddleware(req,res,next){
 
//     console.log(' request heade s- -',req.headers);
//     const usertoken = req.headers['authorization'];

//     const Newtoken = usertoken.split("Bearer ")[1];
//     console.log('user New token -',Newtoken);
//     if(!usertoken)   return res.redirect('/login');      // no cookies found

//     console.log('after login =-')
//     const user = getUser(Newtoken);                    // checking user
//     console.log('user asigned-',user);
    
//     if(!user) return  res.redirect('/login');        // no user found 

//     req.user = user;
//     next();
// }


// with Better way -=> 

async function authmiddleware(req,res,next){
 
    const Cookievalue = req?.headers?.cookie;
    const  Maincookievalue =  Cookievalue?.split("=")[1];
    
    console.log('cookiee value -',Maincookievalue);
    if(!Cookievalue) return res.redirect('/login');

    const user = getUser(Maincookievalue);                     // checking user
    console.log('user asigned-',user);
    
    if(!user) return  res.redirect('/login');           // no user found 

    req.user = user;
    return next();
}

async function checkauth(req,res,next){  
     const Maincookievalue = req.cookies?.token;
     console.log('user added-',Maincookievalue);

     if(!Maincookievalue) return  res.redirect('/login');   

     const user = getUser(Maincookievalue);         
     console.log('user asigned-',user);
    
    if(!user) return  res.redirect('/login');   

    req.user = user;
    return next();

}


// apply Authorization | Restrictions

function restrictUser(roles = []){
    return function(req,res,next){

        if(!req.user) return res.redirect('/login'); 
        if(!roles.includes(req.user.role)) return res.end("UnAuthorized");

        return next();
    }
}

export {
     authmiddleware,
     restrictUser,
     checkauth
}