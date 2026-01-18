const db = require('../DATABASE/queries')

async function generateHomePage(req,res){
    const categories = await db.getCategories()
    for(let category of categories){
        const result = await db.getItemsCount(category.id)
        category.itemsCount = result[0].count
    }
    res.render('index',{categories,msg:''})
}

async function addCategory(req,res){
    const categories = await db.getCategories()
    await db.addCategory(req.body.category)
    res.redirect('/')
}

async function deleteCategory(req,res){
    await db.deleteCategory(req.params.id)
    res.redirect('/')
}

async function viewEditCategory(req,res){
    const {id} = req.params
    const [category] = await db.getIndividualCategory(id)
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

async function viewEditItem(req,res){
    console.log(req.params)
    const [category] = await db.getIndividualCategory(req.params.id)
    const [row] = await db.getIndividualItem(req.params.itemId)
    console.log(row.name)
    res.render('updateItem',{category,row})
}

async function addItem(req,res){
    const {id} = req.params
    await db.addItem(req.body.item,req.body.url,id)
    res.redirect(`/${id}`)
}

async function removeItem(req,res){
    db.removeItem(req.params.itemId)
    res.redirect(`/${req.params.id}`)
}

async function editItem(req,res){
    await db.editItem(req.body.newName, req.body.newUrl, req.params.itemId)
    res.redirect(`/${req.params.id}`)
}

module.exports = {
    viewCategory,
    addCategory,
    generateHomePage,
    deleteCategory,
    viewEditCategory,
    editCategory,
    addItem,
    viewEditItem,
    removeItem,
    editItem
}