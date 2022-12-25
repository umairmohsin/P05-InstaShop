const mongoose = require('mongoose')

async function createIndexes(){
    const db = await mongoose.connection.db
    await db.collection('clients').createIndex({email:1}, {unique: true})
    await db.collection('admins').createIndex({email:1}, {unique: true})
    await db.collection('influencers').createIndex({email:1}, {unique: true})
    await db.collection('orders').createIndex({orderID:1} , {unique: true})
}

module.exports = {createIndexes}