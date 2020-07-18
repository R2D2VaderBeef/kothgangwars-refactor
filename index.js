const express = require('express');
const app = express();

// always keep on top
app.use(function(req, res, next){
  console.log("Request recieved at " + Date.now() + " From " + req.ip);
  next();
});
app.use("/", function(req, res, next) {
  res.send("Index");
  console.log("send Index");
  next();
})


app.use(function(req, res){
  console.log("request ended");
})
app.listen(process.env.PORT || 4200)
