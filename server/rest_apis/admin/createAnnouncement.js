const {createAnnouncement} = require('../../database/Create/createAnnouncement')
const sanitize = require("mongo-sanitize")

async function create_announcement(req, res){
    try{
        if(res.role === 'Admin'){
            const body = sanitize(req.body.body)
            const title = sanitize(req.body.title)
            await createAnnouncement(title, body)
            res.status(200).json({
                msg: 'Annoucement successfully made!',
                announcement: {
                    title: title,
                    body: body,
                    date: new Date()
                }
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {create_announcement}