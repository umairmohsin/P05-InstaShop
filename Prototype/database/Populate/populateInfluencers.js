const {createInfluencer} = require('../Create/createInfluencer')
const {createHash} = require('crypto');

async function populateInfluencers(){
    
    const influencerPassword = createHash('sha256').update('influencer123').digest('hex')

    console.log(`Making 'Influencer' entries...`)

    await createInfluencer('Influencer', 'Irfan Junejo', 'Photography', 'irfanjunejo@gmail.com', '2010-03-18', 'Pakistan', 75000, 'North Nazimabad Karachi', influencerPassword)

    await createInfluencer('Influencer', 'Luke Damant', 'Sports', 'lukedamant@gmail.com', '2016-09-12', 'Pakistan', 54000, 'Model Town Lahore', influencerPassword)

    await createInfluencer('Influencer', 'Xeetechcare', 'Electronics', 'xeetechcare@gmail.com', '2018-05-07', 'Pakistan', 54000, 'Johar Town Lahore', influencerPassword)

    await createInfluencer('Influencer', 'Rana Hamza Saif', 'Food', 'rhs@gmail.com', '2016-01-15', 'Pakistan', 54000, 'Bahria Town Lahore', influencerPassword)

    await createInfluencer('Influencer', 'Balarosh', 'Bags', 'balarosh@gmail.com', '2020-06-20', 'Pakistan', 54000, 'DHA Lahore', influencerPassword)

}

module.exports = {populateInfluencers}
