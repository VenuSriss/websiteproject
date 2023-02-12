const express = require("express");
const router = express.Router();
const { render } = require("ejs");

router.get("/", (req, res) => {
  res.render("dashboard");
});

router.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

router.get("/faq", (req, res) => {
  res.render("faq");
});

router.get("/soildata", (req, res) => {
  res.render("soildata");
});

router.get("/states", (req, res) => {
  res.render("states");
});

router.get("/andhra", (req, res) => {
  res.render("andhrarecom");
});

router.get("/gujarat", (req, res) => {
  res.render("gujarat");
});

router.get("/maharashtra", (req, res) => {
  res.render("maharashtra");
});

router.get("/tamilnadu", (req, res) => {
  res.render("tamilnadu");
});

router.get("/kerala", (req, res) => {
  res.render("kerala");
});

router.get("/uttra", (req, res) => {
  res.render("uttra");
});

router.get("/redsoil", (req, res) => {
  res.render("redsoil");
});

router.get("/blacksoil", (req, res) => {
  res.render("blacksoil");
});

router.get("/coastal", (req, res) => {
  res.render("coastal");
});

router.get("/residual", (req, res) => {
  res.render("(g)reas");
});

router.get("/alkanli", (req, res) => {
  res.render("alkalini");
});

router.get("/coastalm", (req, res) => {
  res.render("(m)coatal");
});

router.get("/clay", (req, res) => {
  res.render("clay");
});

router.get("/redtmailnadu", (req, res) => {
  res.render("(t)red");
});

router.get("/alluivalsoil", (req, res) => {
  res.render("alluivalsoil");
});

router.get("/cal", (req, res) => {
  res.render("cal");
});

module.exports = router;
