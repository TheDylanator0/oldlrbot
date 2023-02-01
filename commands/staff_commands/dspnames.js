const discord = require("discord.js")

module.exports = {
    name: 'dspnames',
    description: "Explains how the ROBLOX Display Name feature is handled in LR.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            const dspEmbeds = new discord.MessageEmbed()
            .setTitle("How do display names work in Liberty Roleplay?")
            .setDescription("As you know, you must abide by rule 1 at all times. But, now that the Display Name feature has rolled out publicly, your server nickname may now contain DISPLAYNAME (@USERNAME). Ex: COUNTY | Dylan (@DylanRobloxBuilds).")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(dspEmbeds)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const dspEmbeds2 = new discord.MessageEmbed()
            .setTitle("How do display names work in Liberty Roleplay?")
            .setDescription("As you know, you must abide by rule 1 at all times. But, now that the Display Name feature has rolled out publicly, your server nickname may now contain DISPLAYNAME (@USERNAME). Ex: COUNTY | Dylan (@DylanRobloxBuilds).")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            message.channel.send(dspEmbeds2)
        } else{
            return;
        }


    }
}