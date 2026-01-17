const express = require('express')
const app = express()
const indexRouter = require('./ROUTES/index')
const path = require('node:path')
require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'PUBLIC')))
app.set('view engine','ejs')


app.post('*any',(req,res,next)=>{
    if(req.body.password == process.env.ADMINPASSWORD){
        process.env.ISVALIDATED = 'True';
        res.redirect('/')
    }
    next()
})
app.get('*any',(req,res,next)=>{
    if(process.env.ISVALIDATED == 'False'){
        res.render('password');
    }else{
        next();
    }
})
app.use('/',indexRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{ console.log(`Listening on port: ${PORT}`) })
