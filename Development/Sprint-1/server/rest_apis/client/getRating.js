const sanitize = require('mongo-sanitize')
const mongoose = require("mongoose")

const Client = require('../../database/Schema/Client')

async function getRating(req, res){
    
    console.log(req.body)
    try{
        const result = await mongoose.connection.db.collection('clients').find({"rating":req.body.rating},{
            $set:{
                "rating":req.body.ans
            }
        })
        console.log(result)
    }catch(err){
        console.log(err)
    }

    // {
    //     Client.find({},(err,result)=>{
    //         if(err){
    //             res.status(500).send(err)
    //         }
    //         res.status(200).send(result)
    //         console.log(result)
    //     })
    // }
}
module.exports = {getRating}
