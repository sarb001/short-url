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

async function authmiddleware(req,res,next){
 
    console.log(' request heade s- -',req.headers);
    const usertoken = req.headers['authorization'];

    const Newtoken = usertoken.split("Bearer ")[1];
    console.log('user New token -',Newtoken);
    if(!usertoken)   return res.redirect('/login');      // no cookies found

    console.log('after login =-')
    const user = getUser(Newtoken);                    // checking user
    console.log('user asigned-',user);
    
    if(!user) return  res.redirect('/login');        // no user found 

    req.user = user;
    next();
}

export {
     authmiddleware
}