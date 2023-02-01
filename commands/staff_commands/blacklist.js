const discord = require("discord.js")

module.exports = {
    name: 'blacklist',
    description: "DONT DO IT",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
        const advertisingEmbed = new discord.MessageEmbed()
        .setTitle("One of the servers I'm in is blacklisted, what can I do!?")
        .setDescription("Leave the server immediatly. In most cases, we allow you up to 7 days to leave a blacklisted server, but the minimum we will give you is 24 hours (One day). If you are found in a blacklisted server after thsi period, your account will face moderation action.")
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        message.channel.send(advertisingEmbed)
    } else if(message.member.roles.cache.has('848593030076170280')){
        const advertisingEmbed2 = new discord.MessageEmbed()
        .setTitle("One of the servers I'm in is blacklisted, what can I do!?")
        .setDescription("Leave the server immediatly. In most cases, we allow you up to 7 days to leave a blacklisted server, but the minimum we will give you is 24 hours (One day). If you are found in a blacklisted server after thsi period, your account will face moderation action.")
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        message.channel.send(advertisingEmbed2)
    } else{
        return;
    }


    }
}