const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const config = require('../config/values')

const userSchema = new Schema({
    email: {
        required: true,
        unique: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    }
})

userSchema.pre('save', async function (next) {
    let user = this

    if (!user.isModified('password')) return next()

    let salt = await bcrypt.genSalt(config.SALT_ROUNDS)
    let hash = await bcrypt.hash(user.password, salt)

    user.password = hash
    next()
})

userSchema.methods.comparePassword = async function (text) {
    let isMatch = await bcrypt.compare(text, this.password)
    return isMatch
}

module.exports = mongoose.model('User', userSchema)