
import express from 'express';
import shortid from  'shortid';
import { Userurl } from '../models/url.js';

async function HandlercreateNewURL(req,res){
    const Uniqueid =  shortid.generate();
    console.log('uniqid =',Uniqueid);
    
    const body = req.body;
    
    if(!body.mainurl) return  res.status(400).json({ message : "MainUrl is required" });

    const Response = await Userurl.create({
            shorturl : Uniqueid,
            mainurl : body.mainurl,
    });

    console.log('main Resp -',Response);
    return res.json({ id : Response.shorturl });
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

// tracking total visits on  click 

async function AnalyticsHandler(req,res){
    const urlparams = req.params.shortid;
    console.log('url params -',urlparams);

    const Result = await Userurl.findOne({ shorturl : urlparams });
    console.log("Result -",Result);

   const Count =  Result.visitHistory.length;
   console.log('count -',Count);

    return res.json({ message : "Clicks  done " })
}


export  {
    HandlercreateNewURL,
    HandlerRidrectURL,
    AnalyticsHandler
}