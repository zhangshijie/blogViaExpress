var express = require('express')
var app = express()
var indexRouter = require('./routers/index')
var userRouter = require('./routers/users')

app.use('/',indexRouter)
app.use('/users',userRouter)

app.listen(3000);