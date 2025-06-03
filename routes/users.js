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
    try {
        const userDocSnapShot = await usersModel.where('email', '==', req.body.email).limit(1).get()
        if (!userDocSnapShot.empty){
            const userDoc = userDocSnapShot.docs[0]
            if (req.body.password === userDoc.password){
                res.status(200).json(userDoc.data())
            }
            else {
                res.status(401).json({errorMessage: "Invalid email and password combination"})
            }
        }
        else {
            res.status(500).json({errorMessage: "An error occurred while trying to log in:"})
        }
    } catch (error) {
        res.status(500).json({errorMessage: error})
    }
    
})

router.post('/setUserInfo/:email', async (req, res) => {
    try {
        const userDocSnapShot = await usersModel.where('email', '==', req.params.email).limit(1).get()
        //user not found
        if (userDocSnapShot.empty){
            res.status(404).json({errorMessage: "Error - could not find account with requested"})
        }
        else {
            const userDoc = userDocSnapShot.docs[0]
            const newUserObj = {
                ...userDoc.data(),
                ...req.body
            }
            await setDoc(userDoc.ref, newUserObj)
            res.status(200).json({data: "Success"})

        }
    }
    catch (error){
        res.status(500).json({errorMessage: error})
    }
    
})



module.exports = router
