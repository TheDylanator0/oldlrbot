// Defining boring stuff

const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '!lr '

const fs = require('fs');

client.commands = new Discord.Collection();

const mongoose = require('mongoose');

// ----------------- //


const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}



// Just saying that the bot is online
client.once('ready', () => {
    console.log('LR Bot is online!');
});

// ----------------- //

client.on('guildMemberAdd', guildMember =>{
    let applicant = guildMember.guild.roles.cache.find(role => role.name === 'Applicant');
    guildMember.roles.add(applicant);
    guildMember.guild.channels.cache.get('813861205352775680').send(`Welcome <@${guildMember.user.id}>! Thanks for choosing Liberty Roleplay as your go-to Roblox ER:LC roleplay server! Apply in <&812003617674100776> to get access to the rest of the server!`)
});



// Command handler
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.delete()
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube') {
        message.delete()
        client.commands.get('youtube').execute(message, args);
    } else if (command == 'mod') {
        message.delete()
        client.commands.get('mod').execute(message, args);
    } else if (command == 'info') {
        message.delete()
        client.commands.get('info').execute(message, args);
    } else if (command == 'infopublic') {
        message.delete()
        client.commands.get('infopublic').execute(message, args);
    } else if (command == 'applications') {
        message.delete()
        client.commands.get('applications').execute(message, args);
    } else if (command == 'dspnames') {
        message.delete()
        client.commands.get('dspnames').execute(message, args);
    } else if (command == 'vc') {
        message.delete()
        client.commands.get('vc').execute(message, args);
    } else if (command == 'advertising') {
        message.delete()
        client.commands.get('advertising').execute(message, args);
    } else if (command == 'staff') {
        message.delete()
        client.commands.get('staff').execute(message, args);
    } else if (command == '911') {
        client.commands.get('911').execute(message, args);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command == 'avatar') {
        client.commands.get('avatar').execute(message, args);
    } else if (command == 'threat') {
        message.delete()
        client.commands.get('threat').execute(message, args);
    } else if (command == 'bad') {
        client.commands.get('bad').execute(message, args);
    } else if (command == 'needamod') {
        message.delete()
        client.commands.get('needamod').execute(message, args);
    } else if (command == 'clearmyass') {
        message.delete()
        client.commands.get('clearmyass').execute(message, args);
    } else if (command == 'partner') {
        message.delete()
        client.commands.get('partner').execute(message, args);
    } else if (command === 'howtoapply') {
        message.delete()
        client.commands.get('howtoapply').execute(message, args);
    } else if (command == 'session') {
        message.delete()
        client.commands.get('session').execute(message, args);
    } else if (command == 'autocorrect') {
        client.commands.get('autocorrect').execute(message, args);
    } else if (command == 'sessionstillgoing') {
        message.delete()
        client.commands.get('sessionstillgoing').execute(message, args);
    } else if (command == 'blacklist') {
        message.delete()
        client.commands.get('blacklist').execute(message, args);
    } else if (command === '311') {
        client.commands.get('311').execute(message, args);
    } else if (command == 'giveaways') {
        message.delete()
        client.commands.get('giveaways').execute(message, args);
    } else if (command == 'jacobisdrunk') {
        message.delete()
        client.commands.get('jacobisdrunk').execute(message, args);
    } else if (command == 'reqsesh') {
        client.commands.get('reqsesh').execute(message, args);
    } else if (command == 'avatar') {
        client.commands.get('avatar').execute(message, args);
    }  else if (command == 'av') {
        client.commands.get('av').execute(message, args);
    } else if (command == 'reactionroles') {
        client.commands.get('reactionroles').execute(message, args);
    } else if (command == 'cmds') {
        client.commands.get('cmds').execute(message, args);
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args);
    }
});

mongoose.connect("mongodb+srv://TheDylanator:Dylan0411@lrbot.vzk9w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connected to points database')
}).catch((err) => {
    console.log(err)
});

// ----------------- //

// Ping filter
const staffList = ["694514693800460309", "752387137629978624", "774725242592952360"];

client.on('message', async (message) => {
    if (message.mentions.users.size > 0) {
        message.mentions.users.forEach(mention => {
            if (staffList.indexOf(mention.id) != -1) {
                const warningEmbed = new Discord.MessageEmbed()
                    .setTitle("Do not mention Administraitor+")
                    .setDescription("This is in violation of Rule 4. Doing this repetedly will result in a warn/kick.")
                    .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
                    .setColor('ffff00')
                message.channel.send(warningEmbed)

            } else if (message.content.includes("@everyone")) {
                return console.log('@everyone ping');
            } else if (message.content.includes("@here")) {
                return console.log('@here ping')
            } else if(message.author.bot === true){
                return console.log("Bot pinged 'em.")
            } else if(message.content.includes("<@&769957988542185502>")){
                return console.log("Pinged a moderator.")
            }   else{
                return;
            }
        });
    }
});





// Some stuff that's not in use
const safeLinks = ["https://www.youtube.com/", "https://twitter.com/", "https://www.instagram.com/", "https://www.facebook.com/", "https://roblox.com/", "https://sites.google.com/view/liberty-roleplay", "https://discord.com/", "https://discord.gg/ZbSP49ZMhz", "https://therocketcad.com", "https://therocketcad.com/invite?code=ZVHLZ", "https://twitter.com/LibertyRPrblx"];
const linkRex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);

// ----------------- //

// #roleplay-ideas Reaction System
client.on('message', message => {
    if (message.channel.id === '820300604093104188') {
        message.react('⭐');
        message.react('❌');
        message.react(':LibertyRoleplay:');
        console.log("Reacted!")
    } else {
        console.log("Unable to react.")
    }

    if (message.channel.id === '802322037632008253') {
        message.react('❤️');
        message.react('<:LibertyRoleplay:846769215784484874>');
    }
});

// ----------------- //

// Naughty word filter
client.on('message', message => {
    if(message.content.includes('nigga')) {
        message.delete();
        const badwordEmbed = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3 and in some cases rule 5.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed)
        message.author.send(badwordEmbed)
    } else if(message.content.includes('niggar')) {
        message.delete();
        const badwordEmbed2 = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3 and in some cases rule 5.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed2)
        message.author.send(badwordEmbed2)
    } else if(message.content.includes('nigger')) 
    {
        message.delete();
        const badwordEmbed3 = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3 and in some cases rule 5.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed3)
        message.author.send(badwordEmbed3)
    } else if(message.content.includes('dick')){
        message.delete();
        const badwordEmbed4 = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3 and in some cases rule 5.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed4)
        message.author.send(badwordEmbed4)
    } else if(message.content.includes('dickhead')){
        message.delete();
        const badwordEmbed5 = new Discord.MessageEmbed()
            .setTitle("**Warning!**")
            .setDescription("Please do not continue to post harsh profanity or extensive swearing. This is in violation of rule 3 and in some cases rule 5.")
            .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
            .setColor('ffff00')
        message.channel.send(badwordEmbed5)
        message.author.send(badwordEmbed5)
    } else if(message.content.includes('refund')){
        message.delete();
    } else if(message.content.includes('acdc is the best')){
        message.channel.send("Yes it is :)")
    }
});

// ----------------- //

// Polotics filter
client.on('message', message => {
    if(message.content.includes('biden')) {
        message.delete()
        const poloEmbed1 = new Discord.MessageEmbed()
        .setTitle("**Warning!**")
        .setDescription("Please do not talk about political topics.")
        .addFields(
            {name: "We want LR to be a polotical-free community.", value: "Please help us out by not discussing political topics."}
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        .setColor('ffff00')
        message.channel.send(poloEmbed1)
    } else if(message.content.includes('trump')){
        message.delete()
        const poloEmbed2 = new Discord.MessageEmbed()
        .setTitle("**Warning!**")
        .setDescription("Please do not talk about political topics.")
        .addFields(
            {name: "We want LR to be a polotical-free community.", value: "Please help us out by not discussing political topics."}
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        .setColor('ffff00')
        message.channel.send(poloEmbed3)
    } else if(message.content.includes("kamala")){
        message.delete()
        const poloEmbed1 = new Discord.MessageEmbed()
        .setTitle("**Warning!**")
        .setDescription("Please do not talk about political topics.")
        .addFields(
            {name: "We want LR to be a polotical-free community.", value: "Please help us out by not discussing political topics."}
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        .setColor('ffff00')
        message.channel.send(poloEmbed3)
    } else if(message.content.includes("chauvin")){
        message.delete()
        const poloEmbed4 = new Discord.MessageEmbed()
        .setTitle("**Warning!**")
        .setDescription("Please do not talk about political topics.")
        .addFields(
            {name: "We want LR to be a polotical-free community.", value: "Please help us out by not discussing political topics."}
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        .setColor('ffff00')
        message.channel.send(poloEmbed4)
    } else if(message.content.includes("floyd")){
        message.delete()
        const poloEmbed5 = new Discord.MessageEmbed()
        .setTitle("**Warning!**")
        .setDescription("Please do not talk about political topics.")
        .addFields(
            {name: "We want LR to be a polotical-free community.", value: "Please help us out by not discussing political topics."}
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/775006834805047307/866349999770959922/LR_EMOJI.png')
        .setColor('ffff00')
        message.channel.send(poloEmbed5)
    }
});

// ----------------- //

// Logging into the bot
client.login('heh you really thought')
