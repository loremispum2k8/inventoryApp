const express = require('express')
const app = express()
const indexRouter = require('./ROUTES/index')
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.use('/',indexRouter)
app.set('view engine','ejs')

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{ console.log(`Listening on port: ${PORT}`) })
