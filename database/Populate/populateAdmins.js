const {createAdmin} = require('../Create/createAdmin')
const {createHash} = require('crypto');

async function populateAdmins(){
    
    const adminPassword = createHash('sha256').update('admin123').digest('hex')

    console.log(`Making 'Admin' entries...`)

    await createAdmin('Admin', 'Bilal', 'Shahid', 'bilal.shahid@gmail.com', 'bilal.shahid', adminPassword)
    
    await createAdmin('Admin', 'Affan', 'Ashraf', 'affan.ashraf@gmail.com', 'affan.ashraf', adminPassword)
}

module.exports = {populateAdmins}
