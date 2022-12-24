const Contracts = require('../Schema/Contracts')

async function createContract(ContID, clemail , infemail, price) {
    const contract = await Contracts.create({ 
        ContractID: ContID,
        ClientEmail: clemail,
        InfluencerEmail: infemail,
        Price: price
    })
    await contract.save()
}

module.exports = {createContract}