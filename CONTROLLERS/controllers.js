const db = require('../DATABASE/queries')
require('dotenv').config()

async function generateHomePage(req,res){
    if(process.env.ISVALIDATED == 'True'){
            const categories = await db.getCategories()
            res.render('index',{categories})
    }else{
            res.send('invalid')
    }
}

async function addCategory(req,res){
    db.addCategory(req.body.category)
    res.redirect('/')
}

async function viewCategory(req,res){
    const {id} = req.params
    const [category] = await db.getIndividualCategory(id)
    res.render('category',{category})
}


module.exports = {
    viewCategory,
    addCategory,
    generateHomePage
}