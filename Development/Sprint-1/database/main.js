const uri = "mongodb+srv://bilal:sproj123@cluster0.efvzb9g.mongodb.net/InstaShop?retryWrites=true&w=majority"
const {connect, dropCollection} = require('./util')
const populate = require('./Populate/populate')
const {createIndexes} = require('./index')

run()
async function run(){
    const db = await connect(uri)
    const collections = await db.listCollections().toArray()
    const list = collections.map(async (x, i) => {
        await dropCollection(x.name)
    })
    await Promise.all(list);
    await createIndexes();
    await populate();
    console.log('DONE!')
    process.exit()
}

