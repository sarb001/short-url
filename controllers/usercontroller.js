
import express from 'express';
import { User } from '../models/user.js';
import {  v4 as uuidv4 } from 'uuid' ;
import { setUser } from '../service/serviceauth.js';


async function usersignup(req,res){
   const { username, email, password } = req.body;
   console.log('body is -', { username, email, password });
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
     const { email , password } = req.body;
     console.log('email | password -',{ email , password });
     const user = await User.findOne({
        email , password
      })
      console.log(' login user ',user);
     if(!user) return res.render('login',{
       error : " Invalid user | password"
     });

      const token = setUser(user);
      console.log('token -',token);
       res.cookie('token',token);
     return res.redirect('/homepage');
}

export {
   userlogin,
   usersignup
}