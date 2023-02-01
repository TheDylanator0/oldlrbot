const discord = require("discord.js")

module.exports = {
    name: 'vc',
    description: "Explains that you have to be in a voice chat in the LR server.",
    execute(message, args){

        if (message.member.roles.cache.has('769957988542185502')){
            const vcEmbed = new discord.MessageEmbed()
            .setTitle("Do I have to be in a voice chat?")
            .setDescription("Voice Chat MUST be used at all times while in the Liberty Roleplay server.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(vcEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const vcEmbed2 = new discord.MessageEmbed()
            .setTitle("Do I have to be in a voice chat?")
            .setDescription("Voice Chat MUST be used at all times while in the Liberty Roleplay server.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(vcEmbed2)
        } else{
            return;
        }


    }
}