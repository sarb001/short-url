import mongoose  from "mongoose";


export default function db(){
    mongoose.connect('mongodb://localhost:27017/urlshortner')
    .then(res => console.log('Database connected '))
    .catch(err => console.log(' db connection Failed '))
}