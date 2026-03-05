import express from 'express';
const app   = express();

const PORT = 8000;
app.use(express.json());

app.use('/')


app.listen(PORT , (req,res) => {
    console.log(`PORT is running on ${PORT} ..`)
})