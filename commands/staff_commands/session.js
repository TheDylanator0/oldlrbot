const discord = require("discord.js")

module.exports = {
    name: 'session',
    description: "Ping at the start of a session; lets people know a session is starting.",
    execute(message, args){
        if(message.member.roles.cache.has('769957988542185502')){
            message.channel.send("@everyone Liberty Roleplay session starting now! The join code is ozZOw.")
        } else if(message.member.roles.cache.has('848593030076170280')){
            message.channel.send("@everyone Liberty Roleplay session starting now! The join code is ozZOw.")
        } else{
            return;
        }


    }
}