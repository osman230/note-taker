const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// parse?

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api routes

let newTask = [];

app.get("/api/notes", (req, res) => {
    newTask = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(newTask);
});

app.post("/api/notes", (req, res) => {
    newTask = JSON.parse(fs.readFileSync("./db/db.json"));
    req.body.id = newTask.length;
    newTask.push(req.body);
    newTask = JSON.stringify(newTask);
    fs.writeFile("./db/db.json", newTask, (error) => {
      if (error) throw error;
    });
    res.json(newTask);
});

// html routes

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get("/api/notes", (req, res) => {
  return res.sendFile(path.json(__dirname, './db/db.json'));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// listening

app.listen(PORT, () => {
  console.log('App is listening: ' + PORT);
});