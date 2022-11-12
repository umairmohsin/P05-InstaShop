const {createToken} = require('../auth.js')
const mongoose = require('mongoose')
const sanitize = require('mongo-sanitize');


async function login(req, res){
    try{
        const role = sanitize(req.body.role)
        const email = sanitize(req.body.email)
        const user = await mongoose.connection.db.collection(`${role}s`).findOne({
            email: email
        })
        if (user.password === req.body.password){
            const token = createToken(req.body.email+"|"+ user.role)
            res.cookie("jwt", token, {httpOnly:true, sameSite:true})
            const name = ""
            if (role == "Influencer") {
                name = user.name
            } else {
                name = user.name.first
            }
            res.status(200).json({
                role: user.role,
                name: name
            })
        } else {
            res.status(401).send()
        }
    }
    catch {
        res.status(401).send()
    }
}

module.exports = {login}