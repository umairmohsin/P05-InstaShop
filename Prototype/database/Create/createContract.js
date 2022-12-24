const Contracts = require('../Schema/Contracts')

async function createContract( ContID, clemail , infemail, price) {
    const client = await Contracts.create({ 
        ContractID: ContID,
        ClientEmail: clemail,
        InfluencerEmail: infemail,
        Price: price
    })
    await client.save()
}

module.exports = {createContract}