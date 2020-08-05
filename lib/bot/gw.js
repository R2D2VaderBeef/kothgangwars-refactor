const Discord = require ("discord.js")
const interface = require(process.cwd() + "/lib/database/interface.js");

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
                break;
            case "gw!player":
                gwLookup(msg, arg1);
                break;
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

async function gwLookup(msg, arg1) {

    name = "";
    points = "";
    sets = "";
    wins = "";
    losses = "";
    bonuses = "";
    total = "";
    strikes = "";

    const embed = new Discord.MessageEmbed()
    .setTitle("Searching database for `" + arg1 + "`")
    .setDescription("If no player stats appear after this message, you have entered the name incorrectly or the player is not on record.")
    .setColor("#d43e46")
    .setFooter("KOTH Unofficial Gang Wars", "https://kothgangwars.herokuapp.com/logo.png");
    msg.channel.send(embed);
    
    const response = await interface.retrieve(arg1, 20);
    const resdata = await response.json();

    name = resdata.name;
    points = resdata.points;
    sets = resdata.sets;
    wins = resdata.wins;
    losses = resdata.losses;
    bonuses = resdata.bonuses;
    total = resdata.total;
    strikes = resdata.strikes;

    const embed = new Discord.MessageEmbed()
  .setTitle("Player Stats: " + name)
  .setDescription('This player data is only for the most recent war.')
  .setColor("#52a8db")
  .setFooter("KOTH Unofficial Gang Wars", "https://kothgangwars.herokuapp.com/logo.png")
  .addFields(
    { name: 'Game Points', value: points, inline: true },
    { name: 'Sets Played', value: sets, inline: true  },
    { name: 'Game Wins', value: wins, inline: true  },
    { name: 'Game Losses', value: losses, inline: true  },
    { name: 'Bonuses', value: bonuses, inline: true  },
    { name: 'Total Points', value: total, inline: true  },
    { name: 'STRIKES', value: strikes, inline: true  }, )

    if (name != undefined) {
        msg.channel.send(embed);
      }
}

function gwNotfound(msg) {
    
    const embed = new Discord.MessageEmbed()

        .setTitle("Command not found")
        .setDescription("Did you make a typo? Type `gw!help` to see a list of all *Gang Wars* commands.")
        .setColor("#d43e46")
        .setFooter("KOTH Unofficial Gang Wars", "https://kothgangwars.herokuapp.com/logo.png")

    msg.channel.send(embed);
}