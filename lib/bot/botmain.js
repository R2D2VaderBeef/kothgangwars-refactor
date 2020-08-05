// Presetup
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;
const gw = require(process.cwd() + "/lib/bot/gw.js");

// Login
if (token) {
client.login(token);
}

// Log when ready and set status
client.on("ready", () => {
  console.log("Ready!");
  console.log("My username is " + client.user.username);
  setPresence();
});

function setPresence() {
client.user.setActivity("the Gang Wars Scoreboard", { type: "WATCHING" })
.catch(console.error);
}

// Handle Messages
client.on("message", msg => {
  console.log(client.user.username + " received a message in " + msg.channel.name)
  msg.content = msg.content.toLowerCase();
  if (msg.author.id = client.user.id) return;
  if (msg.content.slice(0,3) = "gw!") {
    console.log("Received a gwCommand")
    gw.respond(msg);
  }
});
