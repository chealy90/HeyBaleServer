const express = require('express')
const router = express.Router()
const usersModel = require('../models/users')


//REGISTERING
router.get('/', (req, res) => {
    res.send('Hello from my Laptop')
})



router.post('/register', (req, res) => {
    console.log(req.body)
    usersModel.add(req.body)
    .then(()=>{
        res.status(201).json(req.body)
    })
})



module.exports = router
