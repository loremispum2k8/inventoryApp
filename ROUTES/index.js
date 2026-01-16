const {Router} = require('express')
const indexRouter = Router()
const controls = require('../CONTROLLERS/controllers')

indexRouter.get('/',controls.generateHomePage)
indexRouter.post('/addCategory',controls.addCategory)
indexRouter.get('/:id',controls.viewCategory)


module.exports = indexRouter