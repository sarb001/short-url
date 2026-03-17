import mongoose from "mongoose";

const userschema = new mongoose.Schema({
      username : {
        type : String,
        required : true,
        unique : true,
     },
     email : {
        type : String,
        required : true,
        unique : true
     },                                                           
     password : {
        type : String,
        required : true,
        unique : true
     },
     role : {
       type : String,
       required : true,
       default : 'NORMAL'
     }
})

export const User = mongoose.model('User',userschema);