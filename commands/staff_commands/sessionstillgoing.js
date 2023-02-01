module.exports = {
    name: 'sessionstillgoing',
    description: "Explains that the session is still going, but its died down.",
    execute(message, args){


        if(message.member.roles.cache.has('769957988542185502')){
        message.channel.send('@everyone The session is still going. Make sure to join!')
    } else if(message.member.roles.cache.has('848593030076170280')){
        message.channel.send("@everyone The session is still going. Make sure to join!")
    } else{
        return;
    }
    }
}