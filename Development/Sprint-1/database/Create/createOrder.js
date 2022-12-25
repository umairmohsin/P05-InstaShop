const Order = require('../Schema/Order')

async function createOrder(OrderID, clemail , infemail, price, status="Pending", acceptedByClient=false, ratingGiven=false) {
    
    const order = await Order.create({  
        orderID: OrderID,
        clientEmail: clemail,
        influencerEmail: infemail,
        price: price,
        status: status,
        acceptedByClient: acceptedByClient,
        ratingGiven: ratingGiven

    })
    await order.save()
}

module.exports = {createOrder}