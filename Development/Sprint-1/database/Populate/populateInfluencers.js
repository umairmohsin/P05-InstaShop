const {createInfluencer} = require('../Create/createInfluencer')
const {createHash} = require('crypto');

async function populateInfluencers(){
    
    const influencerPassword = createHash('sha256').update('influencer123').digest('hex')

    console.log(`Making 'Influencer' entries...`)

    await createInfluencer('Influencer', 'Umair', 'Mohsin', 'umair.mohsin@gmail.com', '2000-02-01', 'umair.mohsin', 'www.google.com', 'Shoes', influencerPassword, 5, [1, 4, 12])
    
    await createInfluencer('Influencer', 'Farva', 'Talib', 'farva.talib@gmail.com', '2001-07-03', 'farva.talib', 'www.google.com', 'Clothing', influencerPassword, 5, [3, 8])
    
    await createInfluencer('Influencer', 'Hassan Ahmad', 'Raza', 'hassan.raza@gmail.com', '1999-04-08', 'hassan.raza' ,'www.google.com', 'Sports' , influencerPassword, 5, [5, 11])
    
    await createInfluencer('Influencer', 'Salman', 'Masood', 'salman.masood@gmail.com', '2000-10-11', 'salman.masood', 'www.google.com', 'Food', influencerPassword, 5, [2, 9, 10])
    
    await createInfluencer('Influencer', 'Mursal Javed', 'Akhtar', 'mursal.akhtar@gmail.com', '2002-08-24', 'mursal.akhtar' ,'www.google.com', 'Kitchen' , influencerPassword, 5, [6, 7])

}

module.exports = {populateInfluencers}