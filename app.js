const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://venusri:venusri220@cluster0.ghwj0mp.mongodb.net/Project",
  () => {
    console.log("db was sync");
  }
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use("", require("./routes/pageroutes"));
app.use("", require("./routes/login"));

app.listen(3000);
