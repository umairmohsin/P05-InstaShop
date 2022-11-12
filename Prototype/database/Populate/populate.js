const {populateClients} = require('./populateClients')
const {populateAdmins} = require('./populateAdmins')
const {populateInfluencers} = require('./populateInfluencers')
const {populateAnnouncements} = require('./populateAnnouncements')


async function populate(){

    console.log('\nPopulating database...\n')

    await populateClients();
    await populateAdmins();
    await populateInfluencers();
    await populateAnnouncements();
}

module.exports = populate