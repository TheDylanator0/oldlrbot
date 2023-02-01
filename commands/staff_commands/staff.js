const discord = require("discord.js")

module.exports = {
    name: 'staff',
    description: "Lists who works at LR.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            const staffEmbed = new discord.MessageEmbed()
            .setTitle("Who is an employee at Liberty Roleplay?")
            .setDescription("Liberty Roleplay is a Private ER:LC roleplay server! Owned by DylanRobloxBuilds, Co-Owned by LLSINGH222 and jacobRS2009, Administrated by jacobRS2009 and TaylorRobloxYT3, Moderated by iceyousee, DimonLimon9555, kingmac1273, and raceingking28!")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(staffEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const staffEmbed2 = new discord.MessageEmbed()
            .setTitle("Who is an employee at Liberty Roleplay?")
            .setDescription("Liberty Roleplay is a Private ER:LC roleplay server! Owned by DylanRobloxBuilds, Co-Owned by LLSINGH222 and jacobRS2009, Administrated by jacobRS2009 and TaylorRobloxYT3, Moderated by iceyousee, DimonLimon9555, kingmac1273, and raceingking28!")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(staffEmbed2)
        } else{
            return;
        }


    }
}