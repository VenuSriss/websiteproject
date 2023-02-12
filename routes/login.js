const express = require("express");
const router = express.Router();
const { render } = require("ejs");
const User = require("../models/login");
const Contactus = require("../models/contant us");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    emailid: req.body.emailid,
    password: req.body.password,
    state: req.body.state,
  });
  console.log(user);
  user.save().then(() => {
    res.redirect("/");
  });
});

router.get("/contactus", (req, res) => {
  res.render("contactus");
});

router.post("/contactus", (req, res) => {
  const contact = new Contactus({
    name: req.body.name,
    emailid: req.body.emailid,
    phone: req.body.phone,
    comments: req.body.comments,
    state: req.body.state,
  });
  console.log(contact);
  contact.save().then(() => {
    res.redirect("/");
  });
});
module.exports = router;
