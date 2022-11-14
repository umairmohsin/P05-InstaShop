const {signup} = require('../database/Schema/Signup')
const sanitize = require("mongo-sanitize")

async function getSignup(req, res){
    try{
        if(res.role === 'Admin')
        {
            const name = sanitize(req.body.name)
            const email = sanitize(req.body.email)
            const username = sanitize(req.body.username)
            const password = sanitize(req.body.password)
            res.status(200).json({
                msg: 'Admin Signup successfully made!',
                signup: {
                    name: name,
                    email: email,
                    username : username,
                    password : password,
                    date: new Date()
                }
            })
        } 
        else if(res.role == 'Influencer'){
            const name = sanitize(req.body.name)
            const email = sanitize(req.body.email)
            const username = sanitize(req.body.username)
            const password = sanitize(req.body.password)
            res.status(200).json({
                msg: 'Influencer Signup successfully made!',
                signup: {
                    name: name,
                    email: email,
                    username : username,
                    password : password,
                    date: new Date()
                }
            })
        }
        else if (res.role == 'Client'){
            const name = sanitize(req.body.name)
            const email = sanitize(req.body.email)
            const username = sanitize(req.body.username)
            const password = sanitize(req.body.password)
            res.status(200).json({
                msg: ' Client Signup successfully made!',
                signup: {
                    name: name,
                    email: email,
                    username : username,
                    password : password,
                    date: new Date()
                }
            })
        }
        else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getSignup}





