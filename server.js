// need express to interact with the front end
const express = require("express");
// need path for filename paths
const path = require("path");
// need fs to read and write to files
const fs = require("fs");

// creating an "express" server
const app = express();
// Sets an Initial port for listeners
const PORT = process.env.PORT || 9001;

//  Initialize newTask

let newTask = [];

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



// api routes

app.get("/api/notes", function(err, res) {
  try {
    newTask = fs.readFileSync("./db/db.json", "utf8");
    newTask = JSON.parse(newTask);
  } catch (err) {
  }
  res.json(newTask);
});

app.post("/api/notes", function(req, res) {
  try {
    newTask = fs.readFileSync("./db/db.json", "utf8");
    newTask = JSON.parse(newTask);
    req.body.id = newTask.length;
    newTask.push(req.body);
    newTask = JSON.stringify(newTask);
    fs.writeFile("./db/db.json", newTask, "utf8", function(err) {
      if (err) throw err;
    });
    res.json(JSON.parse(newTask));
  } catch (err) {
    throw err;
  }
});

// html routes

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function(req, res) {
  return res.sendFile(path.json(__dirname, "./db/db.json"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// listening
app.listen(PORT, function() {
  console.log("SERVER IS LISTENING: " + PORT);
});