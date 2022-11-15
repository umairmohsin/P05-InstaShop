const sanitize = require('mongo-sanitize')
const Admin = require('../../database/Schema/Admin')

async function getAdminProfile(req, res){
    try{
        if(res.role === 'Admin'){
            const admin = await Admin.findOne({email: sanitize(req.body.email)})
            // const role   = await Admin.findOne({role: sanitize(req.body.role)})
            // const username = await Admin.findOne({username: sanitize(req.body.username)})
            // const email= await Admin.findOne({email: sanitize(req.body.email)})
            const toSend = {
                // return the profile
                // client:client,
                role:admin.role,
                name : `${admin.name.first} ${admin.name.last}`,
                email:admin.email ,
                username:admin.username
            }
            res.status(200).json(toSend)
        } else{
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}
module.exports = {getAdminProfile}