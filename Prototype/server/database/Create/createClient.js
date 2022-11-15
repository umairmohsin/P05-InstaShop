const Client = require('../Schema/Client')

async function createClient(role, name, category, email, startDate, country, zipcode, address, password) {
    const client = await Client.create({
        role: role,
        name: name,
        category: category,
        email: email,
        startDate: startDate,
        country: country,
        zipcode: zipcode,
        address: address,
        password: password
    })
    await client.save()
}

module.exports = {createClient}