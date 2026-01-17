const {Router} = require('express')
const indexRouter = Router()
const controls = require('../CONTROLLERS/controllers')

indexRouter.get('/',controls.generateHomePage)
indexRouter.post('/addCategory',controls.validateCategory,controls.addCategory)
indexRouter.get('/:id',controls.viewCategory)
indexRouter.get('/delete/:id',controls.deleteCategory)


module.exports = indexRouter