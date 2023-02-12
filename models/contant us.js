const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema({
  name: {
    type: String,
    allowNull: false,
  },
  emailid: {
    type: String,
    allowNull: false,
  },
  phone: {
    type: Number,
    allowNull: false,
  },
  comments: {
    type: String,
    allowNull: false,
  },
  state: {
    type: String,
    allowNull: false,
  },
});

module.exports = mongoose.model("Contactus", contactusSchema);
