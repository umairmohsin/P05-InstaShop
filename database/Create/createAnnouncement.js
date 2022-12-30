const Announcement = require('../Schema/Announcement')

async function createAnnouncement(title, body) {
    const announcement = await Announcement.create({
        title: title,
        body: body,
        date: new Date()
    })
    await announcement.save()
}

module.exports = {createAnnouncement}