const Discord = require ("discord.js")

// Commands that can be called by other files
module.exports = {

    respond: (msg) => {

        messagestring = msg.toString();
        messagearray = messagestring.split(" ")
        command = messagearray[0];
        arg1 = messagearray[1];

        switch (command) {  
            case "gw!help":
                gwHelp(msg);
            case "gw!player":
                gwLookup(msg, arg1);
            default:
                gwNotfound(msg); 
        }
    }
}

// Help command
function gwHelp(msg) {

    const embed = new Discord.MessageEmbed()

        .setTitle("Bot Commands")
        .setDescription('This message lists all *Gang Wars* commands coded into the bot - there are fun commands for you to discover.')
        .setColor("#52a8db")
        .setFooter("KOTH Unofficial Gang Wars", "https://kothgangwars.herokuapp.com/logo.png")
        .addFields(
            { name: '`gw!player <Player name>` - Get Player Stats', value: "See a player's stats for the current War. Replace <Player name> with the player's username." },
        )

    msg.channel.send(embed);
        
}

function gwLookup(msg, arg1) {
    msg.channel.send("Unable to get player stats for " + arg1 + " because this feature has not yet been coded.")
}

function gwNotfound(msg) {
    
    const embed = new Discord.MessageEmbed()

        .setTitle("Command not found")
        .setDescription("Did you make a typo? Type `gw!help` to see a list of all this bot's commands.")
        .setColor("#d43e46")
        .setFooter("KOTH Unofficial Gang Wars", "https://kothgangwars.herokuapp.com/logo.png")

    msg.channel.send(embed);
}