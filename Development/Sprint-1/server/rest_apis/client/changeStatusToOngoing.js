const sanitize = require("mongo-sanitize")
const mongoose = require("mongoose")
const updateStatus =async(req,res)=>{
    console.log(req.body)
    try{
        const result = await mongoose.connection.db.collection('orders').updateOne({"orderID":req.body.myID},{
            $set:{
                "status":req.body.ans
            }
        })
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

module.exports = {updateStatus}