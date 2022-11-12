const {createAnnouncement} = require('../Create/createAnnouncement')

async function populateAnnouncements(){

    console.log(`Making 'announcements' entries...`)

    await createAnnouncement('Welcome to InstaShop!', 'AMS is LIVE and available for end-users with additional features rolling out soon!')
    await createAnnouncement('Join our Platform!', 'Get your online business organized this instant')
}

module.exports = {populateAnnouncements}