const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
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
        unique: true,
        validate(value) {
            if (!validator.isEmail(value) || !value.includes('@dickinson.edu')) {
                throw new Error("Invalid email!")
            }
        },
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password'))
                throw new Error('Password can\'t contain "password"!')
        }
    },
    isLearner : {
        type: Boolean,
        required: true
    },
    isInstructor : {
        type: Boolean,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})

//change res.send to return//throw error
userSchema.statics.findByCredentials = async (dsonEmail, password) => {
    try {
        const user = await User.findOne({dsonEmail})
        if (!user) {
            throw new Error('Unable to login!')
        }
        else {
            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                throw new Error('Unable to login!')
            }
            
            return user
        }
    }
    catch (e) {
        throw e
    }
}

userSchema.methods.generateAuthToken = async function () {
    const user = this //need to bind this user context
    const token = jwt.sign({_id: user._id.toString()}, 'thisIsMyNewInstance')
    
    user.tokens = user.tokens.concat({token})
    try {
        await user.save()
        return token
    }
    catch(e) {
        throw e
    }
}

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()

})

const User = mongoose.model('User', userSchema)

module.exports = User