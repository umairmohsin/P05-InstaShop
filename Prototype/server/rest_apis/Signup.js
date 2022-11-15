const {createClient} = require('../../database/Create/createClient')
const {createInfluencer} = require('../../database/Create/createInfluencer')
const sanitize = require("mongo-sanitize")
// general signup functions from create scheme

async function Signup(req, res){
    try{
        if(res.role == 'Influencer'){
            const role = sanitize (req.body.role)
            const fname = sanitize(req.body.name.f_name)
            const lname = sanitize(req.body.name.l_name)
            const email = sanitize(req.body.email)
            const dob = sanitize(req.body.dob)
            const username = sanitize(req.body.username)
            const link = sanitize(req.body.link)
            const niche = sanitize(req.body.niche)
            const password = sanitize(req.body.password)
            await createClient(role, fname, lname, email, dob, username, link, niche, password )
            res.status(200).json({
                // msg: 'Influencer Signup successfully made!',
                
                // If createClient returns successfully, why are we sending the whole data of the entity again?
                
                role: role,
                name: {
                    first: fname,
                    last: lname
                },
                email: email,
                dob: dob,
                username: username,
                profileLink: link,
                niche: niche,
                password: password
                })
        }

        else if(res.role == 'Client'){
            const role = sanitize (req.body.role)
            const name = sanitize(req.body.name)
            const category = sanitize(req.body.category)
            const email = sanitize(req.body.email)
            const startDate = sanitize(req.body.startDate)
            const country = sanitize(req.body.country)
            const zipcode = sanitize(req.body.zipcode)
            const address =  sanitize(req.body.address)
            const password = sanitize(req.body.password)
            await createInfluencer(role, name, category, email, startDate, country, zipcode, address, password )
            res.status(200).json({
                // msg: 'Client Signup successfully made!',

                // Same question as above in regards to sending this data back upon successfull signup
                
                role: role,
                name: name,
                category: category,
                email: email,
                startDate: startDate,
                country: country,
                zipcode: zipcode,
                address: address,
                password: password
                })
        }
        else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}
module.exports = {Signup}





