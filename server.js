require('dotenv').config()
const express = require ('express')
const app = express()
const ejs = require('ejs');
const data = require('./models/data.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// require('./router')(app);

app.get('/', (req, res) => {
    res.send(data)
})

app.get('/index', (req, res) => {
    res.render ('index.ejs', {
        bakedgoods : data
    })

})

app.get('/show/:index/', (req, res) => {
    const indexno = parseInt(req.params.index); 
    res.render('show.ejs', {
        bakedgood : data[indexno]

    })
})

app.listen (process.env.PORT, ()=> {
    console.log ('app is listening at port 3000')
})