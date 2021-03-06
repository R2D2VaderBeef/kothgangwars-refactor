const Discord = require ("discord.js")
const interface = require(process.cwd() + "/lib/database/interface.js");

// Commands that can be called by other files
module.exports = {

    respond: (msg) => {

        messagestring = msg.toString();
        messagearray = messagestring.split(" ")
        command = messagearray[0];
        

        switch (command) {  
            case "gw!help":
                gwHelp(msg);
                break;
            case "gw!player":
                messagearray.shift();
                lookupplayer = messagearray.join(" ");
                gwLookup(msg, lookupplayer);
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

async function gwLookup(msg, lookupplayer) {

    name = "";
    points = "";
    sets = "";
    wins = "";
    losses = "";
    bonuses = "";
    total = "";
    strikes = "";

    const embed = new Discord.MessageEmbed()
    .setTitle("Searching database for `" + lookupplayer + "`")
    .setColor("#d43e46")
    .setFooter("KOTH Unofficial Gang Wars", "https://kothgangwars.herokuapp.com/logo.png")
    const lookupmsg = await msg.channel.send(embed);

    try {
    const response = await interface.retrieve(lookupplayer, 20000);
    console.log("Bot requested playerdata for " + lookupplayer + " and received playerdata for " + response[0].playername);

    name = response[0].playername;
    points = response[0].gamepoints;
    sets = response[0].setsplayed;
    wins = response[0].gamewins;
    losses = response[0].gamelosses;
    bonuses = response[0].bonuses;
    total = response[0].totalpoints;
    strikes = response[0].strikes;

    const embed2 = new Discord.MessageEmbed()
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
    { name: 'STRIKES', value: strikes, inline: true  }, );

    if (name != undefined) {
        lookupmsg.edit(embed2);
      }
    }

    catch (err) {
        console.log(err);
        console.log("Could not deliver player data for " + lookupplayer);

        const errorembed = new Discord.MessageEmbed()
    .setTitle("Could not find player data for `" + lookupplayer + "`")
    .setDescription("Error details below. Contact one of the Co-Organizers if the problem persists.")
    .setColor("#d43e46")
    .setFooter("KOTH Unofficial Gang Wars", "https://kothgangwars.herokuapp.com/logo.png")
    .addFields(
        { name: 'Error info', value: err,}, );

    lookupmsg.edit(errorembed);
    
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
