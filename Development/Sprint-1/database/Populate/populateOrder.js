const {createOrder} = require('../Create/createOrder')

async function populateContract(){

    console.log(`Making 'Contract' entries...`)

    await createOrder( '10', 'irfanjunejo@gmail.com', 'xyz@gmail.com' , 3000)

    await createOrder( '11', 'irfanjunejo@gmail.com', 'abc@gmail.com' , 4000)
}

module.exports = {populateContract}

