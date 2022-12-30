const mongoose = require("mongoose")
const sanitize = require("mongo-sanitize")

async function changePasswordGeneral(req, res){
    console.log("In change password")
    console.log(req.body)
    try{
        const password = sanitize(req.body.password)
        await mongoose.connection.db.collection(`${req.body.role}s`).updateOne({email: req.body.email}, {$set: {password: password}})
        res.status(200).send('Password successfully updated.')
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {changePasswordGeneral}