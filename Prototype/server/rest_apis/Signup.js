const {createClient} = require('../../database/Create/createClient')
const {createInfluencer} = require('../../database/Create/createInfluencer')
const mongoose = require('mongoose')
const sanitize = require('mongo-sanitize');

// general signup functions from create scheme

async function Signup(req, res){
    try{
        if(req.body.role == 'Influencer'){
            const role = sanitize (req.body.role)
            const fname = sanitize(req.body.name.fName)
            const lname = sanitize(req.body.name.lName)
            const email = sanitize(req.body.email)
            const dob = sanitize(req.body.dob)
            const username = sanitize(req.body.username)
            const link = sanitize(req.body.link)
            const niche = sanitize(req.body.niche)
            const password = sanitize(req.body.password)
            await createInfluencer(role, fname, lname, email, dob, username, link, niche, password )
            res.status(200).send()
        }

        else if(req.body.role == 'Client'){
            const role = sanitize (req.body.role)
            const name = sanitize(req.body.name)
            const category = sanitize(req.body.category)
            const email = sanitize(req.body.email)
            const startDate = sanitize(req.body.startDate)
            const country = sanitize(req.body.country)
            const zipcode = sanitize(req.body.zipcode)
            const address =  sanitize(req.body.address)
            const password = sanitize(req.body.password)
            await createClient(role, name, category, email, startDate, country, zipcode, address, password )
            res.status(200).send()
        }
        else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}
module.exports = {Signup}




