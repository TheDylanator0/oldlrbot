const Discord = require('discord.js');

module.exports = {
    name: 'reactionroles',
    async execute(message, args, client) {

        let reaction = '🚔';
        const rrEmbed = new Discord.MessageEmbed()
        .setTitle("On Duty Role!")
        .setDescription(`React to this message to get the "On Duty" role!`)
        .setThumbnail('https://cdn.discordapp.com/attachments/869959970978951201/869995268672745492/Law_Enforcement_CAD.png')
        .addFields(
            {name: '**Attention!**', value: "Please make sure to un-react to this message when you go off duty. Forgetting to do so will result in moderation action."}
        )
        message.channel.send(rrEmbed)
    }
}

