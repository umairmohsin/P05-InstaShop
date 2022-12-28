const sanitize = require('mongo-sanitize')
const {createOrder} = require('../../../server/database/Create/createOrder')
const orderModel = require('../../../server/database/Schema/Order')

async function placeOrder(req,res){
    
    // console.log("Request received: ", req.body)
    // console.log(req.body)
    const totalOrders = await orderModel.countDocuments({}).exec();
    const orderID = totalOrders + 1
    await createOrder(orderID, req.body.clientEmail, req.body.influencerEmail, req.body.price)
}

module.exports = {placeOrder}