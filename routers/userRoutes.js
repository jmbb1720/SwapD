const express = require('express')
const User = require('../models/users.js')
const router = new express.Router()
const auth = require('../public/js/auth.js')

router.post('/users', async (req,res) => {
    const user = new User(req.body)
    try {
        const token = await user.generateAuthToken()
        await user.save()
        res.status(201).send({user, token})
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/me', auth, async (req, res) => {
    // middleware already sets req.user to be the user
    // try {
    //     const user = await User.findOne(req.body)
    //     if (!user) {
    //         return res.status(404).send('Post not found!')
    //     }
    //     res.status(200).send(user)
    // }
    // catch (e) {
    //     res.status(400).send(e)
    // }
    res.send(req.user)
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.dsonEmail, req.body.password)
        const token = await user.generateAuthToken()
        // res.status(200).send(user)
        res.send({user, token})
    }
    catch (e) {
        res.status(400).send(e) //error not being logged to console
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    try {

        const user = await User.findById(req.params.id)

        updates.forEach((update) => {
            user[update] = req.body[update]
        })

        await user.save()
        
        res.send(user)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send("User not found!")
        }
        res.send(user)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router