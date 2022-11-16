// const {createClient} = require('../../../database/Create/createClient')
// const sanitize = require("mongo-sanitize")

// async function ClientSignup(req, res){
//     try{
//         if(res.role == 'Client'){
//             const role = sanitize (req.body.role)
//             const fname = sanitize(req.body.name.f_name)
//             const lname = sanitize(req.body.name.l_name)
//             const email = sanitize(req.body.email)
//             const dob = sanitize(req.body.dob)
//             const username = sanitize(req.body.username)
//             const link = sanitize(req.body.link)
//             const password = sanitize(req.body.password)
//             await createClient(role ,fname , lname ,email , dob, username , link , password )
//             res.status(200).json({
//                 })
//         }
//         else {
//             res.status(401).send()
//         }
//     } catch(err) {
//         res.status(400).send(err)
//     }
// }
// module.exports = {ClientSignup}





