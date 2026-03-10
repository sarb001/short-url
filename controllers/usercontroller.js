
import express from 'express';
import { User } from '../models/user.js';

async function usersignup(req,res){
   const Mainbody = req.body;
   console.log('body is -',Mainbody);
   const newuser  = await User.create({
      username,
      email,
      password
   });
   if(!newuser) return null;
   console.log('newuser -',newuser);
   return res.redirect('/login');
}

async function userlogin(req,res){

}

export {
   userlogin,
   usersignup
}