const discord = require("discord.js")

module.exports = {
    name: 'applications',
    description: "Explains not to rush us to read applications and that they will be read soon.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            const applicationsEmbed = new discord.MessageEmbed()
            .setTitle("When will applications be read?")
            .setDescription("Applications are read every 2-3 days. Please do not rush us to read applications, they will be read soon!")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(applicationsEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const applicationsEmbed2 = new discord.MessageEmbed()
            .setTitle("When will applications be read?")
            .setDescription("Applications are read every 2-3 days. Please do not rush us to read applications, they will be read soon!")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(applicationsEmbed2)
        } else{
            return;
        }


    }
}