const express = require("express");

const app = express();

const cors = require("cors");

const education = require("./education");
const experience = require("./experience");
const hobbies = require("./hobbies");
const languages = require("./languages");
const profile = require("./profile");
const volunteering = require("./volunteering");

app.use(cors());

app.get("/", (req, res) => {
  res.send("It's running");
});

app.get("/education", (req, res) => {
  res.json(education);
});

app.get("/experience", (req, res) => {
  res.json(experience);
});

app.get("/hobbies", (req, res) => {
  res.json(hobbies);
});

app.get("/languages", (req, res) => {
  res.json(languages);
});

app.get("/profile", (req, res) => {
  res.json(profile);
});

app.get("/volunteering", (req, res) => {
  res.json(volunteering);
});

app.listen(process.env.PORT || 4000, () => console.log("Server started"));
