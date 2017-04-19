var path = require('path')
var express = require('express')
var app = express()
var indexRouter = require('./routers/index')
var userRouter = require('./routers/users')

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/',indexRouter)
app.use('/users',userRouter)

app.listen(3000);