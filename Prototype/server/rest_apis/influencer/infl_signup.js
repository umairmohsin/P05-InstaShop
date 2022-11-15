// const {createInfluencer} = require('../../../database/Create/createInfluencer')
// const sanitize = require("mongo-sanitize")

// async function influencer_Signup(req, res){
//     try{
//         if(res.role == 'Influencer'){
//             const role = sanitize (req.body.role)
//             const name = sanitize(req.body.name)
//             const category = sanitize(req.body.category)
//             const email = sanitize(req.body.email)
//             const startDate = sanitize(req.body.startDate)
//             const country = sanitize(req.body.country)
//             const zipcode = sanitize(req.body.zipcode)
//             const address =  sanitize(req.body.address)
//             const password = sanitize(req.body.password)
//             await createInfluencer(role,name,category, email,startDate,country,zipcode,address, password )
//             res.status(200).json({
//                 // msg: 'Influencer Signup successfully made!',
//                 role: role,
//                 name: name,
//                 category: category,
//                 email: email,
//                 startDate: startDate,
//                 country: country,
//                 zipcode: zipcode,
//                 address: address,
//                 password: password
//                 })
//         }
//         else {
//             res.status(401).send()
//         }
//     } catch(err) {
//         res.status(400).send(err)
//     }
// }
// module.exports = {influencer_Signup}





