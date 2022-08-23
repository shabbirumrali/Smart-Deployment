const mongoose = require('mongoose')

const goalsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String, 
        required: [true, 'please add text, this message is from mongoose schema']
    }
}, {
    // Time stamp is used for updated at and created at field
    timestamps: true 
})

module.exports = mongoose.model('Goal', goalsSchema)