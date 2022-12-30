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

async function dropCollection(collection){
    try {
        await mongoose.connection.db.dropCollection(collection)
        console.log(`Dropped collection '${collection}'`)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {connect, dropCollection};