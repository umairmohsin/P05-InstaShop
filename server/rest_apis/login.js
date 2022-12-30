const {createToken} = require('../auth.js')
const mongoose = require('mongoose')
const sanitize = require('mongo-sanitize');


async function login(req, res){
    try{
        // console.log(req.body)
        const role = sanitize(req.body.role)
        const email = sanitize(req.body.email)
        const user = await mongoose.connection.db.collection(`${role}s`).findOne({
            email: email
        })
        if (user.password === req.body.password){
            
            const token = createToken(req.body.email+"|"+ user.role)
            
            res.cookie("jwt", token, {httpOnly:true, sameSite:true})
            
            let name = ""
            
            if (role == "influencer") {
                name = user.name.first
            } else {
                name = user.name.first
            }
            res.status(200).json({
                role: user.role,
                name: name
            })
        } else {
            res.status(401).send()
            // console.log("andar")
        }
        // console.log(user)
        // console.log(role)
    }
    catch {
        res.status(401).send()
        // console.log("bahar")
    }
}

module.exports = {login}