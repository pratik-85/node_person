// var express = require("express");
// var userDataModel = require("../model/userModel");
// var route = express.Router();

// // route.get("/", function (req, res) {
// //   res.send("Hello World");
// // });

// route.get("/getPeople", async function (req, res) {
//   try {
//     var userData = await userDataModel.find();
//     res.status(200).json({ msg: "Receive Successfully!!!" });
//     console.log(userData);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "Internet Error" });
//   }
// });

// route.post("/person", async function (req, res) {
//   try {
//     var data = req.body;
//     var newPerson = await userDataModel(data);
//     newPerson.save();
//     res.status(200).json({ msg: "Success" });
//     console.log(newPerson);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "Internet Error" });
//   }
// });

// route.put("/person/:user_id", async function (req, res) {
//   try {
//     var user = req.params.user_id;
//     var user_data = req.body;
//     var updatePerson = await userDataModel.findByIdAndUpdate(user, user_data);
//     console.log(updatePerson);
//   } catch (error) {
//     res.status(500).json({ msg: "Invalid User" });
//     console.log("Error");
//   }
// });

// module.exports = route;

var express = require("express");
var userDataModel = require("../model/userModel");
var route = express.Router();

// route.get("/", function (req, res) {
//   res.send("Hello World");
// });

route.get("/getPeople", async function (req, res) {
  try {
    var userData = await userDataModel.find();
    res.status(200).json(userData);
    console.log(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internet Error" });
  }
});

route.post("/person", async function (req, res) {
  try {
    var data = req.body;
    var newPerson = new userDataModel(data);
    await newPerson.save();
    res.status(201).json({ msg: "Person created successfully" });
    console.log(newPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internet Error" });
  }
});

route.put("/person/:user_id", async function (req, res) {
  try {
    var user = req.params.user_id;
    var user_data = req.body;
    var updatePerson = await userDataModel.findByIdAndUpdate(user, user_data, { new: true });
    res.status(200).json({ msg: "Person updated successfully" });
    console.log(updatePerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Invalid User" });
  }
});

route.delete("/person/:id",async function(req,res){
    try {
        const user_id = req.params.id;
        const deletePerson = await userDataModel.findByIdAndDelete(user_id);
        res.status(200).json({"msg":"Deleted Successfully!!!"});
    } catch (error) {
        console.log(error);
    }
});

// Comment added for get New Data.

module.exports = route;
