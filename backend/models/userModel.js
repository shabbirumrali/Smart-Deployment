const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name, this message is from mongoose']
    },
    email: {
        type: String,
        required: [true, 'please add an email, this message is from mongoose'],
        unique: true
    },
    password: {
        type: String,
        required: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)