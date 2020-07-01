const mongoose = require('mongoose')
const validator = require('validator')

const Post = mongoose.model('Post', {
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
})

module.exports = Post