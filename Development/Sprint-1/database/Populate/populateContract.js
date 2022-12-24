const {createContract} = require('../Create/createContract')

async function populateContract(){

    console.log(`Making 'Contract' entries...`)

    await createContract( '1', 'irfanjunejo@gmail.com', 'xyz@gmail.com' , 1000)

    await createContract( '2', 'irfanjunejo@gmail.com', 'abc@gmail.com' , 2000)
}

module.exports = {populateContract}

