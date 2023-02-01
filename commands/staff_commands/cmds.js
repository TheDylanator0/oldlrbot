module.exports = {
    name: 'cmds',
    description: "says this is not a valid command noob",
    execute(message, args){
        message.channel.send('"**`!lr cmds`**" is not a valid command. Try running "**`!lr help`**" instead.')



    }
}