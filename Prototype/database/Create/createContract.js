const Admin = require('../Schema/Client')

async function createContract(role, ContID, clemail , infemail, price) {
    const client = await Admin.create({  //change Admin
        role: role,
        ContractID: ContID,
        ClientEmail: clemail,
        InfluencerEmail: infemail,
        Price: price
    })
    await client.save()
}

module.exports = {createContract}