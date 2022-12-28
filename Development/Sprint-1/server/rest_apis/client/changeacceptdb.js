const sanitize = require("mongo-sanitize")
const mongoose = require("mongoose")
const updateAccept =async(req,res)=>{
    console.log(req.body)
    try{
        const result = await mongoose.connection.db.collection('orders').updateOne({"orderID":req.body.myID},{
            $set:{
                "acceptedByClient":req.body.ans
            }
        })
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

module.exports = {updateAccept}