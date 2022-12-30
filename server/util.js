const mongoose = require('mongoose')

async function connect(uri){
    try {
        console.log(`Establishing connection...`)
        await mongoose.connect(uri)
        console.log('Connection established')
        return mongoose.connection.db
    } catch(e) {
        console.log(e)
    }
}

module.exports = {connect};