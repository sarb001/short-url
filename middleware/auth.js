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


async function authmiddleware(req,res,next){
 
    const usertoken = req.cookies?.token;                          
    console.log('user jwt token -',usertoken);
    if(!usertoken)   return res.redirect('/login');      // no cookies found

    console.log('after login =-')
    const user = getUser(usertoken);                    // checking user
    if(!user) return  res.redirect('/login');        // no user found 

    console.log('user assgn');
    req.user = user;
    next();
}

export {
     authmiddleware
}