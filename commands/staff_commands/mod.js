const discord = require("discord.js")

module.exports = {
    name: 'mod',
    description: "explains you can't have mod",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            const modEmbed = new discord.MessageEmbed()
            .setTitle("How can I become a moderator in LR?")
            .setDescription("Moderators in Liberty Roleplay are hand-picked. Please do not ask to be a moderator.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(modEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const modEmbed2 = new discord.MessageEmbed()
            .setTitle("How can I become a moderator in LR?")
            .setDescription("Moderators in Liberty Roleplay are hand-picked. Please do not ask to be a moderator.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(modEmbed2)
        } else{
            return;
        }


    }
}