const express = require('express')
const Post = require('../models/posts.js')
const multer = require('multer');
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

// Find post by title
/*
case doesnt matter - use name for 
for now exact match
use findOne
*/
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

/*
TODO:
Field validation is not needed bc we'll use a form.
get the post with the id first, then update using post id
After posting, how do we get every display to update with new post?
maybe autorefresh in background?
*/
router.patch('/posts/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    try {
        // This is the traditional method of updating in mongoose
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

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

router.get('/', (req, res) => {
    Post.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

module.exports = router