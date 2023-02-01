const discord = require("discord.js")

module.exports = {
    name: 'avatar',
    description: "Get's a users avatar",
    execute(message, args){
        if(message.member.roles.cache.has('848593030076170280')){
            const user = message.mentions.users.first() || message.author;
            const avatarEmbed = new discord.MessageEmbed()
              .setColor(0x333333)
              .setImage(
                `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
              );
            message.channel.send(avatarEmbed);
        } else if(message.member.roles.cache.has('848593030076170280')){
            const user2 = message.mentions.users.first() || message.author;
            const avatarEmbed2 = new discord.MessageEmbed()
              .setColor(0x333333)
              .setImage(
                `https://cdn.discordapp.com/avatars/${user2.id}/${user2.avatar}.png?size=256`
              );
        } else{
          return;
        }
    }
}