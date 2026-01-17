const {Router} = require('express')
const indexRouter = Router()
const controls = require('../CONTROLLERS/controllers')

indexRouter.get('/',controls.generateHomePage)

indexRouter.post('/addCategory',controls.validateCategory,controls.addCategory)

indexRouter.get('/:id',controls.viewCategory)

indexRouter.get('/:id/delete/:itemId',controls.removeItem)

indexRouter.get('/:id/edit/:itemId',controls.viewEditItem)

indexRouter.post('/:id/edit/:itemId',controls.editItem)

indexRouter.post('/:id',controls.addItem)

indexRouter.get('/delete/:id',controls.deleteCategory)

indexRouter.get('/edit/:id',controls.viewEditCategory)

indexRouter.post('/edit/:id',controls.editCategory)


module.exports = indexRouter