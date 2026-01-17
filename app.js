const express = require('express')
const app = express()
const indexRouter = require('./ROUTES/index')
const bodyParser = require('body-parser')
const path = require('node:path')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'PUBLIC')))
app.set('view engine','ejs')

app.use('/',indexRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{ console.log(`Listening on port: ${PORT}`) })
