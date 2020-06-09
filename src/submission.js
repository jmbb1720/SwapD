const path = require('path')
const express = require('express')
require('../db/mongoose.js')
const Post = require('../models/posts.js')
const app = express()
const port = process.env.PORT

// define paths for express config
const publicDir =  path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
//this file is purely for the web server

app.set('views', viewsPath)
app.use(express.json())
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('submit-post.html')
})

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