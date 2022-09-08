const express=require('express')
const Article=require('./../models/article')
const router=express.Router();

router.get('/new',(req,res)=>{
    res.render('new', {articlew: new Article()})
})

router.get('/:slug', async (req,res)=>{

  const article=await Article.find({slug:req.params.slug})
  console.log("show button")
  console.log(article)
  if(article==null) res.redirect('/')
 res.render('show',{article:article})

})

router.post('/',async (req,res)=>{
  

  // console.log("hgsdvjfhb", req.body.title)
    let article=new Article({
       title: req.body.title,
       description:req.body.description,
       markdown:req.body.markdown
    })

  try{

    // console.log(article)
   await article.save().then(()=>console.log("mewo"))

   console.log(article)

   console.log(article.slug)
    res.redirect(`/articles/${article.slug}`)

  } catch(e){
    console.log("error")
      console.log(e)
      console.log(article)
    res.render('new',{article:article})

  }

})

module.exports=router;