import mongoose, { Mongoose } from "mongoose";


const Urlmodel = new mongoose.Schema({
    shorturl : {
        type : String,
        required : true,
        unique : true,
    },
    mainurl : {
        type  : String,
        required : true,
    },
    visitHistory : [{ timestamps : { type : Number } }],
    createdBy : {
         type : mongoose.Schema.Types.ObjectId,
         ref : 'User',
    }
},{ timestamps  : true })

export const Userurl = mongoose.model("Url",Urlmodel)           // url -> automatically used with 's like - urls