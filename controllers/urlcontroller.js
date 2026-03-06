
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

async function HandlerRidrectURL(req,res){
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
      res.redirect(UpdateUrl.mainurl)
}

export  {
    HandlercreateNewURL,
    HandlerRidrectURL
}