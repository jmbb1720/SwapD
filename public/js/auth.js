const jwt = require('jsonwebtoken')
const User = require('../../models/users.js')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '') // remove bearer from token string
        const decoded = jwt.verify(token, "thisIsMyNewInstance")
        const user = await User.findOne({_id : decoded._id, 'tokens.token' : token}) //14:09 video
        if (!user) {
            throw new Error()
        }
        req.user = user
        next()
    }
    catch(e) {
        res.status(400).send('Error: Please authenticate.')
    }
}

module.exports = auth