var express = require("express");
var conn = require("./connection");
var bodyparser = require("body-parser");

var personRoute = require("./routers/personRoute");
var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/",personRoute);

app.listen(6000);
