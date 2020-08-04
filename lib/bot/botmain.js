// Presetup
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;
const gw = require(process.cwd() + "/lib/bot/gw.js");

// Login
if (token) client.login(token);

// Log when ready and set status
client.on("ready", () => {
  console.log("Ready!");
  console.log(client.user.username);

  client.user.setActivity("the Gang Wars Scoreboard", { type: "WATCHING" });
  client.user.setStatus("online");
});

// Handle Messages
client.on("message", (msg) => {
  msg.content = msg.content.toLowerCase();
  if (msg.author.id != client.user.id) return;
  if (msg.content.startsWith("gw!")) {
    gw.respond(msg);
  }
});
