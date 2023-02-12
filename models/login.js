const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    allowNull: false,
  },
  lastname: {
    type: String,
    allowNull: false,
  },
  emailid: {
    type: String,
    allowNull: false,
  },
  password: {
    type: String,
    allowNull: false,
  },
  state: {
    type: String,
    allowNull: false,
  },
});

module.exports = mongoose.model("User", userSchema);
