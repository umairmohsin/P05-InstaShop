const sanitize = require('mongo-sanitize')
const Influencer = require('../../database/Schema/Influencer')

async function getAllInfluencers(req, res){
    try{
        // console.log("Fetching influencer profiles")
        const infProfiles = await Influencer.find()
        // console.log(infProfiles)
        res.status(200).json(infProfiles) 
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getAllInfluencers}