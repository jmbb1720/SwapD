const express = require('express')
const Post = require('../models/posts.js')
const router = new express.Router()

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

router.get('/posts', async (req, res) => {
    try {
        // console.log(req.body)
        const posts = await Post.find(req.body)
        if (!posts) {
            return res.status(404).send('Post not found!')
        }
        res.status(200).send(posts)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.get('/posts/:id', async (req, res) => {
    console.log("Calling get")
    try {
        // console.log(req.body)
        const post = await Post.findById(req.params.id)
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
    console.log("Calling patch")
    const updates = Object.keys(req.body)
    console.log(updates)
    try {
        // This is the traditional method of updating in mongoose
        console.log(req.params.id)
        const post = await Post.findById(req.params.id)
        

        //apply each update, then save. It already does validation for us
        updates.forEach((update) => {
            post[update] = req.body[update]
        })

        await post.save()

        // findbyidandupdate bypasses the middleware
        // const post = await Post.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
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