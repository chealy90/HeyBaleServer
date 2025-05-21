const express = require('express')
const router = express.Router()


//REGISTERING
router.get('/', (req, res) => {
    res.send('Hello from my Laptop')
})



router.post('/register', async (req, res) => {
    try {
        res.status(200).json({
            message: "server received"
        })
    }
    catch (err) {
        console.log(err)
    }

})

module.exports = router
