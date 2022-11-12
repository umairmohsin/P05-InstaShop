const Client = require('../Schema/Client')

async function createClient(role, f_name, l_name, email, dob, username, link, password) {
    const client = await Client.create({
        role: role,
        name: {
            first: f_name,
            last: l_name
        },
        email: email,
        dob: dob,
        username: username,
        profileLink: link,
        password: password
    })
    await client.save()
}

module.exports = {createClient}