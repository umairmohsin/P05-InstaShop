const {createClient} = require('../Create/createClient')
const {createHash} = require('crypto');

async function populateClients(){
    
    const clientPassword = createHash('sha256').update('client123').digest('hex')

    console.log(`Making 'Client' entries...`)

    await createClient('Client', 'Umair', 'Mohsin', 'umair.mohsin@gmail.com', '2000-02-01', 'umair.mohsin', 'www.google.com', clientPassword)
    
    await createClient('Client', 'Farva', 'Talib', 'farva.talib@gmail.com', '2001-07-03', 'farva.talib', 'www.google.com', clientPassword)
    
    await createClient('Client', 'Hassan Ahmad', 'Raza', 'hassan.raza@gmail.com', '1999-04-08', 'hassan.raza' ,'www.google.com', clientPassword)
    
    await createClient('Client', 'Salman', 'Masood', 'salman.masood@gmail.com', '2000-10-11', 'salman.masood', 'www.google.com', clientPassword)
    
    await createClient('Client', 'Mursal Javed', 'Akhtar', 'mursal.akhtar@gmail.com', '2002-08-24', 'mursal.akhtar' ,'www.google.com', clientPassword)

}

module.exports = {populateClients}
