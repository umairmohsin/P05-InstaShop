const {createOrder} = require('../Create/createOrder')

async function populateOrder(){

    console.log(`Making 'Order' entries...`)

    // status = "Pending", acceptedByClient = false, ratingGiven = false
    await createOrder(1, 'irfanjunejo@gmail.com', 'umair.mohsin@gmail.com' , 3000)
    await createOrder(2, 'irfanjunejo@gmail.com', 'salman.masood@gmail.com' , 4000)
    await createOrder(3, 'lukedamant@gmail.com', 'farva.talib@gmail.com' , 2500)

    
    // status = "Ongoing", acceptedByClient = false, ratingGiven = false
    await createOrder(4, 'rhs@gmail.com', 'umair.mohsin@gmail.com' , 3000, "Ongoing")
    await createOrder(5, 'balarosh@gmail.com', 'hassan.raza@gmail.com' , 10000, "Ongoing")
    await createOrder(6, 'balarosh@gmail.com', 'mursal.akhtar@gmail.com' , 1000, "Ongoing")

    // status = "Completed", acceptedByClient = false, ratingGiven = false
    await createOrder(7, 'rhs@gmail.com', 'mursal.akhtar@gmail.com' , 1000, "Completed")
    await createOrder(8, 'rhs@gmail.com', 'farva.talib@gmail.com' , 8000, "Completed")
    await createOrder(9, 'lukedamant@gmail.com', 'salman.masood@gmail.com' , 8000, "Completed")
    

    // status = "Completed", acceptedByClient = true, ratingGiven = false
    await createOrder(10, 'xeetechcare@gmail.com', 'salman.masood@gmail.com' , 1700, "Completed", true)
    await createOrder(11, 'xeetechcare@gmail.com', 'hassan.raza@gmail.com' , 5500, "Completed", true)
    await createOrder(12, 'lukedamant@gmail.com', 'umair.mohsin@gmail.com' , 6300, "Completed", true)

    // status = "Rejected", acceptedByClient = false, ratingGiven = false
    await createOrder(13, 'rhs@gmail.com', 'salman.masood@gmail.com' , 2300, "Rejected")
    await createOrder(14, 'balarosh@gmail.com', 'hassan.raza@gmail.com' , 9900, "Rejected")
    await createOrder(15, 'xeetechcare@gmail.com', 'umair.mohsin@gmail.com' , 7400, "Rejected")
    
    // Clients
    // lukedamant@gmail.com
    // xeetechcare@gmail.com
    // rhs@gmail.com
    // balarosh@gmail.com

    // Influencers
    // hassan.raza@gmail.com
    // mursal.akhtar@gmail.com
    // umair.mohsin@gmail.com
    // salman.masood@gmail.com
    // 

}

module.exports = {populateOrder}

