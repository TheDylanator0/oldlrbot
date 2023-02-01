const mongoose = require('mongoose')

const pointsSchema = mongoose.Schema({
    guildID: { type: String },
    guildName: { type: String},
    points: {type: Number},
})

module.exports = mongoose.model('users', pointsSchema)