//Presetup
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;

//Login
client.login(token);

//Log when ready and start Discord Presence
client.on("ready", () => {
    console.log("Ready!");
    console.log(client.user.username);
    
    client.user.setActivity("Currently unstable", { type: "PLAYING" });
    client.user.setStatus("online");
  });