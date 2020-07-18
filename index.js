const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4200;

// logging requests, always keep on top
app.use(function (req, res, next) {
  console.log("Request recieved at " + Date.now() + " from " + req.ip);
  next();
});
app.use(bodyParser.json());

app.use("/", function (req, res) {
  res.send("index");
});

app.listen(port, function () {
  console.log("App listening on Port: " + port);
});
