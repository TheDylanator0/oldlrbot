const discord = require("discord.js")

module.exports = {
    name: 'partner',
    description: "Explains in detail how to get a partnership with LR.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            const partnerEmbed = new discord.MessageEmbed()
            .setTitle("How do I get a partnership with Liberty Roleplay?")
            .setDescription("First, you need to get accepted. If you have the Civilian role, DM The Dylanator#1234 asking for a partnership and send your advertisment. We will review your server within the next 24 hours and decide on a partnership.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(partnerEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const partnerEmbed2 = new discord.MessageEmbed()
            .setTitle("How do I get a partnership with Liberty Roleplay?")
            .setDescription("First, you need to get accepted. If you have the Civilian role, DM The Dylanator#1234 asking for a partnership and send your advertisment. We will review your server within the next 24 hours and decide on a partnership.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(partnerEmbed2)
        } else{
            return;
        }


    }
}