const discord = require("discord.js")

module.exports = {
    name: 'infopublic',
    description: "Explains what LR is, but its for the public server.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            const infopublicEmbed = new discord.MessageEmbed()
            .setTitle("What is Liberty Roleplay?")
            .setDescription("Liberty Roleplay is a ER:LC server that strives for NO FAIL RP. Join our whitelisted server at https://discord.gg/ac5ZezYVeB")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(infopublicEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const infopublicEmbed2 = new discord.MessageEmbed()
            .setTitle("What is Liberty Roleplay?")
            .setDescription("Liberty Roleplay is a ER:LC server that strives for NO FAIL RP. Join our whitelisted server at https://discord.gg/ac5ZezYVeB")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(infopublicEmbed2)
        } else{
            return;
        }


    }
}