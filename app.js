const express = require("express");

const app = express();
const cors = require("cors");
const additionalInformation = require("./additional-information");
const experience = require("./experience");
const hobbies = require("./hobbies");
const languages = require("./languages");
const profile = require("./profile");
const volunteering = require("./volunteering");
const websiteData = require("./website-data");

app.use(cors());

app.get("/", (req, res) => {
  res.send("It's running");
});

app.get("/additional-information", (req, res) => {
  res.json(additionalInformation);
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

app.get("/website-data", (req, res) => {
  res.json(websiteData);
});

app.listen(4000, () => console.log("Server started, probably on port 4000 ;-)"));
