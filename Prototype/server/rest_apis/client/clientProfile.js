const sanitize = require('mongo-sanitize')
const Client = require('../../database/Schema/Client')

async function getclientProfile(req, res){
    try{
        if(res.role === 'Client'){
            const client = await Client.findOne({email: sanitize(req.body.email)})
            // const role   = await Client.findOne({role: sanitize(req.body.role)})
            // const category = await Client.findOne({category: sanitize(req.body.category)})
            // const country = await Client.findOne({country: sanitize(req.body.country)})
            // const zipcode = await Client.findOne({zipcode: sanitize(req.body.zipcode)})
            // const address = await Client.findOne({address: sanitize(req.body.address)})
           const toSend = {
                // return the profile
                client:client,
                role:client.role,
                // name :name,
                category: client.category,
                country : client.country,
                zipcode: client.zipcode,
                address: client.address
            }
            res.status(200).json(toSend)
        } else{
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getclientProfile}