const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        lowercase: true
    },
    startDate: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rating:{
        type: Number
    },
    pastOrders:{
        type: [Number]
    }
})

module.exports = mongoose.model('Client', clientSchema)