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

router.post('/login', (req, res) => {
    const userDocSnapShot = await usersModel.where('email', '==', req.body.email).limit(1).get()
    if (!userDocSnapShot.empty){
        const userDoc = userDocSnapShot.docs[0]
        if (req.body.password === userDoc.password){
            res.json(userDoc)
        }
        else {
            res.json({errorMessage: "Invalid email and password combination"})
        }
    }
    else {
        res.json({errorMessage: "An error occurred while trying to log in"})
    }


})



module.exports = router
