const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// html routes
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/api/notes", function(req, res) {
  return res.sendFile(path.json(__dirname, "./db/db.json"));
});

// api routes 

let task = [];

app.get("/api/notes", function(err, res) {
    task = fs.readFileSync("./db/db.json", "utf8");
    task = JSON.parse(task);
    res.json(task);
});

app.post("/api/notes", function(req, res) {
    task = fs.readFileSync("./db/db.json", "utf8");
    task = JSON.parse(task);
    req.body.id = task.length;
    task.push(req.body);
    task = JSON.stringify(task);
    fs.writeFile("./db/db.json", task, "utf8")
    res.json(JSON.parse(task));
});


// Start the server on the port
app.listen(PORT, function() {
  console.log("App is listening: " + PORT);
});