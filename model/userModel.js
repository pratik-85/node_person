var mongoose = require("mongoose");

var userDataSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_email: String,
  user_password: String,
  user_city: String,
});

var userDataModel = new mongoose.model("userData", userDataSchema);

module.exports = userDataModel;
