import express from 'express';
import db from './connection.js';
import UrlRoute from './routes/urlroute.js' ;

const app   = express();
app.use(express.json());

const PORT = 8000;

db();

app.use('/api',UrlRoute);

app.listen(PORT , (req,res) => {
    console.log(`PORT is running on ${PORT} ..`)
})