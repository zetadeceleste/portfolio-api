const express = require('express');

const app = express();
const cors = require('cors');

const additionalInformation = require('./data/additional-information');
const experience = require('./data/experience');
const hobbies = require('./data/hobbies');
const languages = require('./data/languages');
const profile = require('./data/profile');
const volunteering = require('./data/volunteering');
const websiteData = require('./data/website-data');

app.use(cors());

app.get('/', (req, res) => {
  res.send("It's running");
});

app.get('/additional-information', (req, res) => {
  res.json(additionalInformation);
});

app.get('/experience', (req, res) => {
  res.json(experience);
});

app.get('/hobbies', (req, res) => {
  res.json(hobbies);
});

app.get('/languages', (req, res) => {
  res.json(languages);
});

app.get('/profile', (req, res) => {
  res.json(profile);
});

app.get('/volunteering', (req, res) => {
  res.json(volunteering);
});

app.get('/website-data', (req, res) => {
  res.json(websiteData);
});

app.listen(4000, () => console.log('Server started, port 4000.'));
