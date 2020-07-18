const express = require("express");
const body-parser = require('body-parser');
const app = express();
const port = process.env.PORT || 4200;

// always keep on top
app.use(function (req, res, next) {
  console.log("Request recieved at " + Date.now() + " from " + req.ip);
  next();
});
app.use(bodyParser.json())


app.use("/", function (req, res, next) {
  res.send("Index");
  console.log("send Index");
  next();
});

app.use(function (req, res) {
  // end of request
});

app.listen(port, function () {
  console.log("App listening on Port: " + port);
});
