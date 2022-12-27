const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {authenticateUser} = require('./auth.js')
const {connect} = require('./util')
const uri = "mongodb+srv://bilal:sproj123@cluster0.efvzb9g.mongodb.net/InstaShop?retryWrites=true&w=majority"
connect(uri);

// rest apis
const {login} = require('./rest_apis/login')
const {getAnnouncements} = require('./rest_apis/getAnnouncements')
const {create_announcement} = require('./rest_apis/admin/createAnnouncement')
const {Signup}  = require('./rest_apis/Signup')
const {changePasswordGeneral} = require('./rest_apis/changePasswordGeneral')

const shapack = require('../server/database/Schema/Announcement')
const shapack2 = require('../server/database/Schema/Order')
//Admin
// const {changePassword} = require('./rest_apis/admin/changePassword')
// const {create_announcement} = require('./rest_apis/admin/createAnnouncement')
const{getAdminProfile} = require('./rest_apis/admin/adminProfile')
//Influencer
const{getInfluencerProfile} = require('./rest_apis/influencer/InfluencerProfile')
// Client
const {getclientProfile} = require('./rest_apis/client/clientProfile')
const {getAllInfluencers} = require('./rest_apis/client/viewInfluencers')
const { getPendingApprovals } = require('./rest_apis/client/viewpendingapprovals.js')
const { getCompletedOrders} = require('./rest_apis/client/completedorders.js')
const { updateAccept } = require('./rest_apis/client/changeacceptdb.js')



const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(cookieParser())
const corsConfig = {
    origin: true,
    credentials: true
}
app.use(cors(corsConfig))
app.options('*', cors(corsConfig));

app.post('/login', async (req, res) => {
    await login(req, res)
})

app.post('/signup', async (req, res) => {
    await Signup(req, res)
})

app.post('/ChangePass', async (req, res) => {
    await changePasswordGeneral(req, res)
})

app.get('/getAnnouncements', (authenticateUser), async (req, res) => {
    await getAnnouncements(req, res)
})

// Admin
app.post('/create_announcement', (authenticateUser), async (req, res) => {
    await create_announcement(req, res)
})

app.get('/adminProfile' , (authenticateUser) , async(req,res) =>{
    await  getAdminProfile(req, res)    
})


// Pending Approvals
app.get('/clientPendingapprovals', async(req,res) =>{
    await  getPendingApprovals(req, res)    
})

app.get('/influencerpendingapprovals', async(req,res) =>{
    await  getPendingApprovals(req, res)    
})

// Completed Orders
app.get('/clientCompletedorders', async(req,res) =>{
    await  getCompletedOrders(req, res)    
})

app.get('/influencercompletedorders', async(req,res) =>{
    await  getCompletedOrders(req, res)    
})


app.get('/allInfProfiles', (authenticateUser), async(req,res) => {
    await getAllInfluencers(req, res)
})
app.post('/changeAccepted',async(req,res)=>{
    await updateAccept(req,res)
})

//Influencer Profile
// app.get('/getInfluencerProfile' , (authenticateUser) , async(req,res) =>{
//     await  getInfluencerProfile(req, res)    
// })
// //Client Profile
// app.get('/getclientProfile' , (authenticateUser) , async(req,res) =>{
//     await  getclientProfile(req, res)    
// })

// general
app.get('/logout', (req, res) => {
    res.cookie('jwt', '', {maxAge:1})
    res.status(200).send()
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})