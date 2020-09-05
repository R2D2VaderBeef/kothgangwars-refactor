const fetch = require("node-fetch")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const interface = require(process.cwd() + "/lib/database/interface.js");
const discordBot = require(process.cwd() + "/lib/bot/botmain.js");
const port = process.env.PORT || 4200;

if (process.env.isHeroku) {
	const date = new Date();
	const options = {
		"embeds": [
			{
				"title": "App Started",
				"fields": [
					{
						"name": "Timestamp",
						"value": Math.floor(Date.now()/1000),
						"inline": true
					},
					{
						"name": "Time",
						"value": "2020-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
						"inline": true
					}
				]
			}
		]
	}

	fetch(process.env.WEBHOOK, {
		method: "post",
		body: JSON.stringify(options),
		headers: { "Content-Type": "application/json" }
	});
}


// logging requests, always keep on top
app.use(function (req, res, next) {
  console.log(
    "Request recieved at " + Date.now() + " to " + req.url + " from " + req.ip
  );
  next();
});
app.use(bodyParser.json());
app.use("/api", interface.router());

app.use("/", express.static("public/desktop"));
app.use("/mobile", express.static("public/mobile"));
app.use("/.well-known", express.static("public/well-known"));

app.use(function (req, res) {
  res.end();
});

app.listen(port, function () {
  console.log("App listening on Port: " + port);
});
