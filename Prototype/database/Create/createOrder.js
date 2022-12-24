const Order = require('../Schema/Order')

async function createOrder( OrderID, clemail , infemail, price) {
    const order = await Order.create({  //change Admin
        OrderID: OrderID,
        ClientEmail: clemail,
        InfluencerEmail: infemail,
        Price: price
    })
    await order.save()
}

module.exports = {createOrder}