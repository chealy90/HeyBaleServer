require('dotenv').config({path:'./config/.env'})

//Express
const express = require('express')
const app = express()
const createError = require('http-errors')
const bodyParser = require('body-parser');
app.use(require('cors')({credentials: true, origin: process.env.LOCAL_HOST}))
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));


//db
const admin  = require('./firebase')
const db = admin.firestore()

//routes
const userRoutes = require('./routes/users')
app.use(userRoutes)




//start server, listen on port
const PORT = process.env.PORT || 5000
app.listen(PORT, '0.0.0.0', () => {
    console.log("connected to port " + process.env.PORT)
})

app.use((req, res, next) => {next(createError(404))})

// Other errors
app.use(function (err, req, res, next)
{
    console.error(err.message)
    if (!err.statusCode)
    {
        err.statusCode = 500
    }
    res.status(err.statusCode).send(err.message)
})
