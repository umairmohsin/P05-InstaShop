const Admin = require('../Schema/Client')

async function createOrder(role, OrderID, clemail , infemail, price) {
    const client = await Admin.create({  //change Admin
        role: role,
        OrderID: OrderID,
        ClientEmail: clemail,
        InfluencerEmail: infemail,
        Price: price
    })
    await client.save()
}

module.exports = {createOrder}