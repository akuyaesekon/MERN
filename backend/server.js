require('dotenv').config();

const express = require('express');

const app = express();

//get requist
app.get('/', (req,res) =>{
    res.json('Buiding from scratch')
});

//port listening
app.listen(process.env.PORT, () =>{
    console.log('server running on port',process.env.PORT)
});