console.log("started")

const mongoose = require('mongoose')

const Article= require('./models/article')

const express = require('express');
const app = express();



mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true,})
    .then(() => { console.log("connection successfull") })
    .catch((e) => {
        console.log("error........")
        console.log(e);
    })

const arctcleRouter = require('./routs/arcticles');



app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))



app.get('/', async (req, res) => {

    const articles = await Article.find().sort({createdAt:'desc'});
    res.render('index', { text: articles })
})

app.use('/articles', arctcleRouter);

app.listen(10000);