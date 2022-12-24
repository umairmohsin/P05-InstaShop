const mongoose = require('mongoose')

const ContractSchema = new mongoose.Schema({
    
    ContractID: { 
        type: Number,
        required: true,
    },
    ClientEmail: {
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

module.exports = mongoose.model('Contracts', ContractSchema)