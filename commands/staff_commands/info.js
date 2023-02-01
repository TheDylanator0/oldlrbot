const discord = require("discord.js")

module.exports = {
    name: 'info',
    description: "Explains what LR is in a nutshell.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            const infoEmbed = new discord.MessageEmbed()
            .setTitle("What is Liberty Roleplay?")
            .setDescription("Liberty Roleplay is a Private ER:LC roleplay server!")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(infoEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const infoEmbed2 = new discord.MessageEmbed()
            .setTitle("What is Liberty Roleplay?")
            .setDescription("Liberty Roleplay is a Private ER:LC roleplay server!")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(infoEmbed2)
        } else{
            return;
        }


    }
}