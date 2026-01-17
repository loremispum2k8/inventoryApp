const {Router} = require('express')
const indexRouter = Router()
const controls = require('../CONTROLLERS/controllers')

indexRouter.get('/',controls.generateHomePage)

indexRouter.post('/addCategory',controls.validateCategory,controls.addCategory)

indexRouter.get('/:id',controls.viewCategory)

indexRouter.get('/:id/delete',(req,res)=>{
    res.send('delete item')
})

indexRouter.get('/:id/edit',(req,res)=>{
    res.send('edit item')
})

indexRouter.post('/:id',controls.addItem)

indexRouter.get('/delete/:id',controls.deleteCategory)

indexRouter.get('/edit/:id',controls.viewEditCategory)

indexRouter.post('/edit/:id',controls.validateCategory,controls.editCategory)


module.exports = indexRouter