const express = require('express')
const router = express.Router()
//const carsModel = require('../models/users')


//REGISTERING
router.get('/', (req, res) => {
    res.send('Hello from my Laptop')
})



router.post('/register', (req, res) => {
    usersModel.add(req.body)
    .then(()=>{
        res.json(req.body)
    })
})



module.exports = router
