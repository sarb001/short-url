import mongoose from "mongoose";


const urlmodel = mongoose.Schema({
    shorturl : {
        type : String,
        required : true,
        unique : true,
    },
    maiurl : {
        type  : String,
        required : true,
    },
    visitHistory : [{ timestamps : { type : Number } }]
},{ timestamps  : true })