const Announcement = require('../database/Schema/Announcement')

async function getAnnouncements(req, res){
    try{
        const announcements = await Announcement.find()
        res.status(200).json({
            announcements: announcements
        })
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getAnnouncements}