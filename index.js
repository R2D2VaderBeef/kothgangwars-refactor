const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const interface = require(process.cwd() + "/lib/database/interface.js");
// const discordBot = require(process.cwd() + "/lib/bot/botmain.js"); commented out cuz broken
const port = process.env.PORT || 4200;

test();

async function test() {
  console.log(await interface.insert(";", 3, 3));
}

// logging requests, always keep on top
app.use(function (req, res, next) {
  console.log(
    "Request recieved at " + Date.now() + " to " + req.url + " from " + req.ip
  );
  if (
    req.protocol == "http" &&
    req.hostname != "[::1]" &&
    req.hostname != "127.0.0.1"
  ) {
    res.writeHead(301, {
      Location: "https://" + req.headers["host"] + req.url,
    });
    console.log(req.hostname);
  }
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
