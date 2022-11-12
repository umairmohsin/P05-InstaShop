const Influencer = require('../Schema/Influencer')

async function createInfluencer(role, name, category, email, startDate, country, zipcode, address, password) {
    const influencer = await Influencer.create({
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
    await influencer.save()
}

module.exports = {createInfluencer}