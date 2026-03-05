import express from 'express';
const app   = express();

const PORT = 8000;

app.listen(PORT , (req,res) => {
    console.log(`PORT is running on ${PORT} ..`)
})