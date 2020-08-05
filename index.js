const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const interface = require(process.cwd() + "/lib/database/interface.js");
const discordBot = require(process.cwd() + "/lib/bot/botmain.js");
const port = process.env.PORT || 4200;

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

app.use(function (req, res) {
  res.end();
});

app.listen(port, function () {
  console.log("App listening on Port: " + port);
});
