const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    res.send('User List')
});

router.get('/new', (req, res) => {
    res.send('User New Form')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

// router.get('/:userId', (req, res) => {
//     // req.params.userId
//     res.send(`Get User with ID ${req.params.userId}`)
// })

router.route('/:userId')
    .get((req, res) => {
        // req.params.userId
        res.send(`Get User with ID ${req.params.userId}`)
    })
    .delete((req, res) => {
        // req.params.userId
        res.send(`Delete User with ID ${req.params.userId}`)
    })
    .put((req, res) => {
        // req.params.userId
        res.send(`Update User with ID ${req.params.userId}`)
    })

// dynamic route ı en alta koy.
module.exports = router;