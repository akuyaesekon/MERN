require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

//middleware
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//get requist
app.get('/', (req,res) =>{
    res.json('Buiding from scratch')
});

//port listening
app.listen(process.env.PORT, () =>{
    console.log('server running on port',process.env.PORT)
});