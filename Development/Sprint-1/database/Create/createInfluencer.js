const Influencer = require('../Schema/Influencer')

async function createInfluencer(role, f_name, l_name, email, dob, username, link, niche, password, rating, pastOrders) {
    const influencer = await Influencer.create({
        role: role,
        name: {
            first: f_name,
            last: l_name
        },
        email: email,
        dob: dob,
        username: username,
        profileLink: link,
        niche: niche,
        password: password,
        rating: rating,
        pastOrders: pastOrders
    })
    await influencer.save()
}

module.exports = {createInfluencer}