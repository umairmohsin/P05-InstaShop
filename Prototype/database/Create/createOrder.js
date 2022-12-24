const Order = require('../Schema/Order')

async function createOrder( OrderID, clemail , infemail, price) {
    const client = await Order.create({  //change Admin
        OrderID: OrderID,
        ClientEmail: clemail,
        InfluencerEmail: infemail,
        Price: price
    })
    await client.save()
}

module.exports = {createOrder}