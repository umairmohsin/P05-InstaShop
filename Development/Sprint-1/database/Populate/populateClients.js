const {createClient} = require('../Create/createClient')
const {createHash} = require('crypto');

async function populateClients(){
    
    const clientPassword = createHash('sha256').update('client123').digest('hex')

    console.log(`Making 'Client' entries...`)

    await createClient('Client', 'Irfan Junejo', 'Photography', 'irfanjunejo@gmail.com', '2010-03-18', 'Pakistan', 75000, 'North Nazimabad Karachi', clientPassword)

    await createClient('Client', 'Luke Damant', 'Sports', 'lukedamant@gmail.com', '2016-09-12', 'Pakistan', 54000, 'Model Town Lahore', clientPassword)

    await createClient('Client', 'Xeetechcare', 'Electronics', 'xeetechcare@gmail.com', '2018-05-07', 'Pakistan', 54000, 'Johar Town Lahore', clientPassword)

    await createClient('Client', 'Rana Hamza Saif', 'Food', 'rhs@gmail.com', '2016-01-15', 'Pakistan', 54000, 'Bahria Town Lahore', clientPassword)

    await createClient('Client', 'Balarosh', 'Bags', 'balarosh@gmail.com', '2020-06-20', 'Pakistan', 54000, 'DHA Lahore', clientPassword)

}

module.exports = {populateClients}

