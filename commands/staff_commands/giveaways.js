const discord = require("discord.js")

module.exports = {
    name: 'giveaways',
    description: "I want free stuff!",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            const applicationsEmbed = new discord.MessageEmbed()
            .setTitle("How do I enter a giveaway?")
            .setDescription("First, you need to apply in <#812003617674100776>. Once you get accepted, you can then view the giveaway channel and enter a giveaway.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(applicationsEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const applicationsEmbed2 = new discord.MessageEmbed()
            .setTitle("How do I enter a giveaway?")
            .setDescription("First, you need to apply in <#812003617674100776>. Once you get accepted, you can then view the giveaway channel and enter a giveaway.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(applicationsEmbed2)
        } else{
            return;
        }


    }
}