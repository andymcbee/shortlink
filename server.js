const express = require('express')
const app = express()
const api = require('./api');
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(api)


const server = app.listen(port, ()=> {
    console.log(`Server now running on ${port}`)
})