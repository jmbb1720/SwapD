const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

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
    }
})

//change res.send to return//throw error
userSchema.statics.findByCredentials = async (dsonEmail, password) => {
    try {
        // console.log(dsonEmail)
        const user = await User.findOne({dsonEmail})
        // console.log(user)
        if (!user) {
            throw new Error('Unable to login!')
        }
        else {
            const hashedPass = await bcrypt.hash(password, 8)
            if (hashedPass != user.password) {
                // console.lo
                throw new Error('Unable to login!')
            }
            return user
        }
    }
    catch (e) {
        throw e
    }
}

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    
    console.log(user.password)
    next()

})

const User = mongoose.model('User', userSchema)

module.exports = User