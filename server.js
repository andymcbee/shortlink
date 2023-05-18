require('dotenv').config();
const express = require('express')
const mysql = require('mysql2');
const app = express()
const api = require('./api');
const port = 3000

 
  

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(api)


// error handling
app.use(function(err, req, res, next){
    const message = err.raw?.message || err.message || err.sqlMessage || null;
     console.log(err)
     return res.status(500).send({ message: message });
   
   });

const server = app.listen(port, ()=> {
    console.log(`Server now running on ${port}`)
})