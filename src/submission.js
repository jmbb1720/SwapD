const express = require('express')
require('../db/mongoose.js')
const Post = require('../models/posts.js')
const app = express()
const port = process.env.PORT

//this file is purely for the web server

app.use(express.json())

app.post('/posts', (req,res) => {
    const post = new Post(req.body)
    post.save().then(() => {
        res.status(201).send(post)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})