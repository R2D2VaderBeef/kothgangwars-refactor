const Discord = require ("discord.js")

module.exports = {

respond: (msg) => {

if (msg.content.startsWith("gw!help")) {
    gwHelp(msg);
}

if (msg.content.startsWith("gw!player")) {
    messagestring = msg.toString();
    player = messagestring.substring(10);
    gwLookup(msg, player);
}
}

}

function gwHelp(msg) {

const embed = new Discord.MessageEmbed()

.setTitle("Bot Commands")
.setDescription('This message lists all *Gang Wars* commands coded into the bot - there are fun commands for you to discover.')
.setColor("#52a8db")
.setFooter("KOTH Unofficial Gang Wars", "https://kothgangwars.herokuapp.com/logo.png")
.addFields({ name: '`gw!player <Player name>` - Get Player Stats', value: "See a player's stats for the current War. Replace <Player name> with the player's username." },)

msg.channel.send(embed);
        
}

function gwLookup(msg, player) {
    msg.channel.send("Unable to lookup " + player + " because this feature has not yet been coded.")
}