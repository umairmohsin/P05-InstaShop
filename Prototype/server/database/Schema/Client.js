const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        lowercase: true
    },
    dob: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profileLink: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// console.log("UserT3 collection created")

module.exports = mongoose.model('Client', clientSchema)