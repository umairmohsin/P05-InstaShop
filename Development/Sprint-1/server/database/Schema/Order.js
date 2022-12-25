const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    
    orderID: {     //Primary key
        type: Number,
        required: true,
    },
    clientEmail: {  
        type: String,
        required: true,
        minlength: 10,
        lowercase: true
    },
    influencerEmail: {
        type: String,
        required: true,
        minlength: 10,
        lowercase: true
    },
    price: {
        type: Number,
        required: true
    },
    status : {
        type: String,
        required: true
    },
    acceptedByClient : {
        type: Boolean,
        required: true
    },
    ratingGiven : {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Order', OrderSchema)