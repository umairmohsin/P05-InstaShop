const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    OrderID: {     //Primary key
        type: Number,
        required: true,
    },
    ClientEmail: {   // import directly from client and influencer
        type: String,
        required: true,
        minlength: 10,
        lowercase: true
    },
    InfluencerEmail: {
        type: String,
        required: true,
        minlength: 10,
        lowercase: true
    },
    Price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Admin', OrderSchema)