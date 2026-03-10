import express from 'express';
import db from './connection.js';
import UrlRoute from './routes/urlroute.js' ;
import path from 'path';
import { Userurl } from './models/url.js';
import ejs from 'ejs';
import UserRouter from './routes/userRoute.js';
import StaticRouter from './routes/staticRouter.js';


const app   = express();
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

const PORT = 8000;

db(); 

app.set('view engine',"ejs");
app.set('views',path.resolve('./views'));

app.use('/',UrlRoute);
app.use('/user',UserRouter);

app.use('/',StaticRouter);


app.listen(PORT , (req,res) => {
    console.log(`PORT is running on ${PORT} ..`)
})