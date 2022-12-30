const Admin = require('../Schema/Admin')

async function createAdmin(role, f_name, l_name, email,username, password) {
    const client = await Admin.create({
        role: role,
        name: {
            first: f_name,
            last: l_name
        },
        email: email,
        username: username,
        password: password
    })
    await client.save()
}

module.exports = {createAdmin}