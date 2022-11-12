const mongoose = require('mongoose')

async function createIndexes(){
    const db = await mongoose.connection.db
    await db.collection('clients').createIndex({role:1, email:1}, {unique: true})
    await db.collection('admins').createIndex({role:1, email:1}, {unique: true})
    await db.collection('influencers').createIndex({role:1, email:1}, {unique: true})
}

module.exports = {createIndexes}