console.log("started")

const mongoose=require('mongoose')


const express=require('express');
const app=express();

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser:true})

const arctcleRouter=require('./routs/arcticles');



app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))




app.get('/',(req,res)=>{

     const articles=[{
        title:'test Article2',
        createArticle: new Date(),
        description:'test description here article1'

     },
    {
        title:'test Article2',
        createArticle:new Date(),
        description:'test description here of article2'
    }
    ]
    res.render('index',{text:articles})
})

app.use('/articles',arctcleRouter);

app.listen(50000);