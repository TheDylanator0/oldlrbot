const discord = require("discord.js")

module.exports = {
    name: 'advertising',
    description: "Explains that you must be CIV+ to post in #self-advertising.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
        const advertisingEmbed = new discord.MessageEmbed()
        .setTitle("How can I advertise in #self-advertising?")
        .setDescription("You must be Civilian+ to post your advertisment in <#855451888161914920>. Apply in <#812003617674100776>.")
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        message.channel.send(advertisingEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const advertisingEmbed2 = new discord.MessageEmbed()
            .setTitle("How can I advertise in #self-advertising?")
            .setDescription("You must be Civilian+ to post your advertisment in <#855451888161914920>. Apply in <#812003617674100776>.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(advertisingEmbed2)
        } else{
            return;
        }


    }
}