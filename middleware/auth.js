import express from 'express';
import { getUser } from '../service/serviceauth.js';

async function authmiddleware(req,res,next){
 
    const userid = req.cookies?.uid;                          
    console.log('userid -',userid);
    if(!userid)   return res.redirect('/login');      // no cookies found

    console.log('after login =-')
    const user = getUser(userid);                    // checking user
    if(!user) return  res.redirect('/login');        // no user found 

    console.log('user assgn');
    req.user = user;
    next();
}

export {
     authmiddleware
}