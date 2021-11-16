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
    console.log("hello!");

    task = JSON.parse(task);  
    res.json(task);
});

// writes the new note to the json file
app.post("/api/notes", function(req, res) {
  try {
    // reads the json file
    task = fs.readFileSync("./db/db.json", "utf8");
    console.log(task);

    // parse the data to get an array of objects
    task = JSON.parse(task);
    // Set new notes id
    req.body.id = task.length;
    // add the new note to the array of note objects
    task.push(req.body); // req.body - user input
    // make it string(stringify)so you can write it to the file
    task = JSON.stringify(task);
    // writes the new note to file
    fs.writeFile("./db/db.json", task, "utf8", function(err) {
      // error handling
      if (err) throw err;
    });
    // changeit back to an array of objects & send it back to the browser(client)
    res.json(JSON.parse(task));

    // error Handling
  } catch (err) {
    throw err;
    console.error(err);
  }
});


// Start the server on the port
app.listen(PORT, function() {
  console.log("App is listening: " + PORT);
});