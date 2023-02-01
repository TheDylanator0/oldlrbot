const discord = require("discord.js")

module.exports = {
    name: 'howtoapply',
    description: "Explains how to apply for LR.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            const applyEmbed = new discord.MessageEmbed()
            .setTitle("How do I apply to join Liberty Roleplay?")
            .setDescription("We appreciate your interest in joining Liberty Roleplay. Head on over to <#812003617674100776> to apply and get started!")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            .setImage('https://media.discordapp.net/attachments/813861205352775680/865603677241868298/lrINVbanner.png?width=994&height=559')
            .setFooter("Note: Please allow up to 3 days for your application to be reviewed.")
            message.channel.send(applyEmbed)
        } else if(message.member.roles.cache.has('848593030076170280')){
            const applyEmbed2 = new discord.MessageEmbed()
            .setTitle("How do I apply to join Liberty Roleplay?")
            .setDescription("We appreciate your interest in joining Liberty Roleplay. Head on over to <#812003617674100776> to apply and get started!")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            .setImage('https://media.discordapp.net/attachments/813861205352775680/865603677241868298/lrINVbanner.png?width=994&height=559')
            .setFooter("Note: Please allow up to 3 days for your application to be reviewed.")
            message.channel.send(applyEmbed2)
        } else{
            return;
        }


    }
}