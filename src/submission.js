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

app.set('view engine', 'pug')
app.set('views', viewsPath)
app.use(express.json())
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.sendFile(viewsPath + '/submit-post.html')
})

app.post('/posts', async (req,res) => {
    // const post = new Post(req.body)
    // console.log(req.body)
    // post.save().then(() => {
    //     res.status(201).send(post)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
    const post = new Post(req.body)
    try {
        await post.save()
        res.status(201).send(post)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

// Find post by title
/*
case doesnt matter - use name for 
for now exact match
use findOne
*/
app.get('/posts', async (req, res) => {
    try {
        // console.log(req.body)
        const post = await Post.findOne(req.body)
        if (!post) {
            return res.status(404).send('Post not found!')
        }
        res.status(200).send(post)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

/*
Field validation is not needed bc we'll use a form.
get the post with the id first, then update using post id
After posting, how do we get every display to update with new post?
maybe autorefresh in background?
*/
app.patch('/posts/:id', async (req, res) => {
    // const updates = Object.keys(req.body)
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
        res.send(post)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (!post) {
            return res.status(404).send("Post not found!")
        }
        res.send(post)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})