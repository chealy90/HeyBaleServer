require('dotenv').config({path:'./config/.env'})

//Express
const express = require('express')
const app = express()
const createError = require('http-errors')
app.use(require('body-parser').json())
app.use(require('cors')({credentials: true, origin: process.env.LOCAL_HOST}))


//routes
const userRoutes = require('./routes/users')
app.use(userRoutes)




//start server, listen on port
app.listen(process.env.SERVER_PORT, '0.0.0.0', () => {
    console.log("connected to port " + process.env.SERVER_PORT)
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