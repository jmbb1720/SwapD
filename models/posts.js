const mongoose = require('mongoose')
const validator = require('validator')

const postSchema = mongoose.Schema( {
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    dsonEmail: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value) || !value.includes('@dickinson.edu')) {
                throw new Error("Invalid email!")
            }
        },
        required: true,
        trim: true,
        lowercase: true
    },
    title: {
        type: String,
        required: true,
        trim: true   
    },
    title_lower: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: String,
    },
    image: {
        data: Buffer,
        contentType: String,
    }
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post