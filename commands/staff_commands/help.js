const discord = require("discord.js")

module.exports = {
    name: 'help',
    description: "helps the user",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
        const advertisingEmbed = new discord.MessageEmbed()
        .setTitle("**<@860992463345942529> Command List**")
        .addFields(
            {name: '**!lr ping**', value: 'Test command to make sure the bot is working. Replies with `pong!`.'},
            {name: '**!lr youtube**', value: 'Explains and links the LR YouTube channel.'},
            {name: '**!lr mod**', value: "Explains how to become a mod (You can't have mod)."},
            {name: '**!lr info**', value: 'Explains what LR is in a nutshell.'},
            {name: '**!lr infopublic**', value: 'Explains what LR is, but its for the public server.'},
            {name: '**!lr applications**', value: 'Explains not to rush us to read applications and that they will be read soon.'},
            {name: '**!lr dspnames**', value: "Explains how the ROBLOX Display Name feature is handled in LR."},
            {name: '**!lr advertising**', value: 'Explains that you must be CIV+ to post in <#855451888161914920>.'},
            {name: '**!lr staff**', value: 'Lists who works at LR.'},
            {name: '**!lr clear**', value: 'Standard clear/purge command.'},
            {name: '**!lr partner**', value: 'Explains in detail how to get a partnership with LR.'},
            {name: '**!lr vc**', value: 'Explains that you have to be in a voice chat in the LR server.'},
            {name: '**!lr howtoapply**', value: 'Explains how to apply for LR.'},
            {name: '**!lr session**', value: 'Ping at the start of a session; lets people know a session is starting.'},
            {name: '**!lr sessionstillgoing**', value: 'Explains that the session is still going, but its died down.'},
            {name: '**!lr blacklist**', value: 'Explains what to do if your in a blacklisted server.'},
            {name: '**!lr giveaways**', value: 'Explains how to enter a giveaway.'},
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        message.channel.send(advertisingEmbed)
    } else if(message.member.roles.cache.has('848593030076170280')){
        const advertisingEmbed2 = new discord.MessageEmbed()
        .setTitle("**LR Bot Command List**")
        .addFields(
            {name: '**!lr ping**', value: 'Test command to make sure the bot is working. Replies with `pong!`.'},
            {name: '**!lr youtube**', value: 'Explains and links the LR YouTube channel.'},
            {name: '**!lr mod**', value: "Explains how to become a mod (You can't have mod)."},
            {name: '**!lr info**', value: 'Explains what LR is in a nutshell.'},
            {name: '**!lr infopublic**', value: 'Explains what LR is, but its for the public server.'},
            {name: '**!lr applications**', value: 'Explains not to rush us to read applications and that they will be read soon.'},
            {name: '**!lr dspnames**', value: "Explains how the ROBLOX Display Name feature is handled in LR."},
            {name: '**!lr advertising**', value: 'Explains that you must be CIV+ to post in <#855451888161914920>.'},
            {name: '**!lr staff**', value: 'Lists who works at LR.'},
            {name: '**!lr clear**', value: 'Standard clear/purge command.'},
            {name: '**!lr partner**', value: 'Explains in detail how to get a partnership with LR.'},
            {name: '**!lr vc**', value: 'Explains that you have to be in a voice chat in the LR server.'},
            {name: '**!lr howtoapply**', value: 'Explains how to apply for LR.'},
            {name: '**!lr session**', value: 'Ping at the start of a session; lets people know a session is starting.'},
            {name: '**!lr sessionstillgoing**', value: 'Explains that the session is still going, but its died down.'},
            {name: '**!lr blacklist**', value: 'Explains what to do if your in a blacklisted server.'},
            {name: '**!lr giveaways**', value: 'Explains how to enter a giveaway.'},
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        message.channel.send(advertisingEmbed2)
    } else{
        return;
    }


    }
}