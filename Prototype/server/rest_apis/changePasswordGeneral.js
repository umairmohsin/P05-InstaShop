const mongoose = require("mongoose")
const sanitize = require("mongo-sanitize")

async function changePasswordGeneral(req, res){
    try{
        const password = sanitize(req.body.password)
        await mongoose.connection.db.collection('users').updateOne({ID: res.ID}, {$set: {password: password}})
        res.status(200).send('Password successfully updated.')
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {changePasswordGeneral}