const express = require('express')
const router = express.Router()
const usersModel = require('../models/users')


//REGISTERING
router.get('/', (req, res) => {
    res.send('Hello from my Laptop')
})



router.post('/register', (req, res) => {
    usersModel.add(req.body)
    .then(()=>{
        res.status(201).json(req.body)
    })
})

router.post('/login', async (req, res) => {
    const userDocSnapShot = await usersModel.where('email', '==', req.body.email).limit(1).get()
    if (!userDocSnapShot.empty){
        const userDoc = userDocSnapShot.docs[0]
        const userData = userDoc.data()
        if (req.body.password === userData.password){
            res.status(200).json(userData)
        }
        else {
            res.status(401).json({errorMessage: "Invalid email and password combination"})
        }
    }
    else {
        res.status(500).json({errorMessage: "An error occurred while trying to log in"})
    }
})



module.exports = router
