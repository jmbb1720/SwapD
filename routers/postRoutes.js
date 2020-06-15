const express = require('express')
const Post = require('../models/posts.js')
const router = new express.Router()

router.get('', (req, res) => {
    res.sendFile(viewsPath + '/submit-post.html')
})

router.post('/posts', async (req,res) => {
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
router.get('/posts', async (req, res) => {
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
TODO:
Field validation is not needed bc we'll use a form.
get the post with the id first, then update using post id
After posting, how do we get every display to update with new post?
maybe autorefresh in background?
*/
router.patch('/posts/:id', async (req, res) => {
    // const updates = Object.keys(req.body)
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
        res.send(post)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/posts/:id', async (req, res) => {
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

module.exports = router