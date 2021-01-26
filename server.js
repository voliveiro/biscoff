require('dotenv').config()
const express = require ('express')
const app = express()
const ejs = require('ejs');
const data = require('./models/data.js')

app.get('/', (req, res) => {
    res.send("Connected!")
})
app.listen (process.env.PORT, ()=> {
    console.log ('app is listening at port 3000')
})