const discord = require("discord.js")

module.exports = {
    name: 'ping',
    description: "Test command to make sure the bot is working. Replies with `pong!`.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
        message.channel.send('pong!')
    } else if(message.member.roles.cache.has('848593030076170280')){
        message.channel.send('pong!')
    } else{
        return;
    }


    }
}