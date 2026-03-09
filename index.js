import express from 'express';
import db from './connection.js';
import UrlRoute from './routes/urlroute.js' ;
import path from 'path';
import { Userurl } from './models/url.js';
import ejs from 'ejs';

const app   = express();
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

const PORT = 8000;

db(); 

app.set('view engine',"ejs");
app.set('views',path.resolve('./views'));

app.use('/',UrlRoute);

app.use('/homepage' , async(req,res) => {
    const AllUrls = await Userurl.find({});
    // console.log('urls -',AllUrls);
    return res.render('home',{
     urls : AllUrls});
});

app.listen(PORT , (req,res) => {
    console.log(`PORT is running on ${PORT} ..`)
})