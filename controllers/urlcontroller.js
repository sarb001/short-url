
import express from 'express';
import shortid from  'shortid';
import { Userurl } from '../models/url.js';

async function HandlercreateNewURL(req,res){
    const Uniqueid =  shortid.generate();
    console.log('uniqid =',Uniqueid);
    
    const body = req.body;
    
    if(!body.mainurl) return  res.status(400).json({ message : "MainUrl is required" });

    const newurl = await Userurl.create({
            shorturl : Uniqueid,
            mainurl : body.mainurl,
    });

    console.log('main Resp -',newurl);
    return res.json({ message : "Created New URL" });
}

export  {
    HandlercreateNewURL
}