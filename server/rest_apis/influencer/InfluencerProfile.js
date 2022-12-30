const sanitize = require('mongo-sanitize')
const Influencer = require('../../database/Schema/Influencer')

async function getInfluencerProfile(req, res){
    try{
        if(req.role === 'influencer'){
            const influencer = await Influencer.findOne({email: sanitize(req.body.email)})
            // const fname = await Influencer.findOne({first: sanitize(req.body.name.first)})
            // // const lname =  await Influencer.findOne({last: sanitize(req.body.name.last)})
            // const role   = await Influencer.findOne({role: sanitize(req.body.role)})
            // const email = await Influencer.findOne({email: sanitize(req.body.email)})
            // const dob =  await Influencer.findOne({dob: sanitize(req.body.dob)})
            // const username = await Influencer.findOne({username: sanitize(req.body.username)})
            // const profileLink =  await Influencer.findOne({profileLink: sanitize(req.body.profileLink)})
            const toSend = {
                // return the profile
                // influencer:influencer,
                role: influencer.role,
                name : `${influencer.name.first} ${influencer.name.last}`,
                email: influencer.email,
                username : influencer.username,
                dob: influencer.dob,
                profileLink:influencer.profileLink
            }
            res.status(200).json(toSend)
        } else{
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}
module.exports = {getInfluencerProfile}
