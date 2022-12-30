const Client = require('../Schema/Client')

async function createClient(role, name, category, email, startDate, country, zipcode, address, password, rating, pastOrders) {
    const client = await Client.create({
        role: role,
        name: name,
        category: category,
        email: email,
        startDate: startDate,
        country: country,
        zipcode: zipcode,
        address: address,
        password: password,
        rating: rating,
        pastOrders: pastOrders
    })
    await client.save()
}

module.exports = {createClient}