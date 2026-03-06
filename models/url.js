import mongoose from "mongoose";


const Urlmodel = mongoose.Schema({
    shorturl : {
        type : String,
        required : true,
        unique : true,
    },
    mainurl : {
        type  : String,
        required : true,
    },
    visitHistory : [{ timestamps : { type : Number } }]
},{ timestamps  : true })

export const Userurl = mongoose.model("Url",Urlmodel)           // url -> automatically used with 's like - urls