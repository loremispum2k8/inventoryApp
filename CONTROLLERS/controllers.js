const db = require('../DATABASE/queries')
require('dotenv').config()
const { body, validationResult } = require('express-validator');
const validateCategory = [
    body('category')
        .trim()
        .notEmpty()
        .withMessage('Category name cannot be empty'),
]

async function generateHomePage(req,res){
    if(process.env.ISVALIDATED == 'True'){
            const categories = await db.getCategories()
            res.render('index',{categories,msg:''})
    }else{
            res.send('invalid')
    }
}

async function addCategory(req,res){
    const categories = await db.getCategories()
    const errors = validationResult(req)
    if(errors.isEmpty()){
        await db.addCategory(req.body.category)
        res.redirect('/')
    }else{
        res.render('index',{msg:errors.errors[0].msg,categories})
    }
}

async function deleteCategory(req,res){
    await db.deleteCategory(req.params.id)
    res.redirect('/')
}

async function viewEditCategory(req,res){
    const {id} = req.params
    const [category] = await db.getIndividualCategory(id)
    console.log(category)
    res.render('update',{category})
}

async function editCategory(req,res){
    await db.editCategory(req.body.newName, req.params.id)
    res.redirect('/')
}

async function viewCategory(req,res){
    const {id} = req.params
    const [category] = await db.getIndividualCategory(id)
    const rows = await db.getItems(id)
    res.render('category',{category,rows})
}

async function addItem(req,res){
    const {id} = req.params
    await db.addItem(req.body.item,req.body.url,id)
    res.redirect(`/${id}`)
}


module.exports = {
    validateCategory,
    
    viewCategory,
    addCategory,
    generateHomePage,
    deleteCategory,
    viewEditCategory,
    editCategory,
    addItem,
}