module.exports = {
    name: 'youtube',
    description: "Explains and links the LR YouTube channel.",
    execute(message, args){


        if(message.member.roles.cache.has('769957988542185502')){
        message.channel.send('Check out the Liberty Roleplay YouTube channel for live streams, trailers, and more! https://www.youtube.com/channel/UCC6yK13ZuI60gjh8jH0JrWw')
        } else if(message.member.roles.cache.has('860887637773647931')){
            message.channel.send('Check out the Liberty Roleplay YouTube channel for live streams, trailers, and more! https://www.youtube.com/channel/UCC6yK13ZuI60gjh8jH0JrWw')
        } else if(message.member.roles.cache.has('848593030076170280')){
            message.channel.send("Check out the Liberty Roleplay YouTube channel for live streams, trailers, and more! https://www.youtube.com/channel/UCC6yK13ZuI60gjh8jH0JrWw")
        } else{
            return;
        }
    }
}