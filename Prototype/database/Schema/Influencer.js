const mongoose = require('mongoose')

const influencerSchema = new mongoose.Schema({
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
    niche: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Rating:{
        type: Number,
        required: true
    },
    PastOrder:{

    },
    Contracts:{

    }
})

module.exports = mongoose.model('Influencer', influencerSchema)