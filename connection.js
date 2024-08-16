var mongoose = require("mongoose");

var conn = mongoose.connect("mongodb://localhost:27017/admin").then((res)=>{
    console.log("Connection Successfully!!!");
}).catch(err=>{
    console.log(err);
})

module.exports = conn;


