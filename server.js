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

//  Initialize notesData

let notesData = [];

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// routes

// api call response for all the notes, and sends the results to the browser as an array of object

app.get("/api/notes", function(err, res) {
  try {
    // reads the notes from json file
    notesData = fs.readFileSync("./db/db.json", "utf8");
    console.log("hello!");
    // parse it so notesData is an array of objects
    notesData = JSON.parse(notesData);

    // error handling
  } catch (err) {
    console.log("\n error (in app.get.catch):");
    console.log(err);
  }
  //   send objects to the browser
  res.json(notesData);
});

// writes the new note to the json file
app.post("/api/notes", function(req, res) {
  try {
    // reads the json file
    notesData = fs.readFileSync("./db/db.json", "utf8");
    console.log(notesData);

    // parse the data to get an array of objects
    notesData = JSON.parse(notesData);
    // Set new notes id
    req.body.id = notesData.length;
    // add the new note to the array of note objects
    notesData.push(req.body); // req.body - user input
    // make it string(stringify)so you can write it to the file
    notesData = JSON.stringify(notesData);
    // writes the new note to file
    fs.writeFile("./db/db.json", notesData, "utf8", function(err) {
      // error handling
      if (err) throw err;
    });
    // changeit back to an array of objects & send it back to the browser(client)
    res.json(JSON.parse(notesData));

    // error Handling
  } catch (err) {
    throw err;
    console.error(err);
  }
});



// HTML GET Requests

// Web page when the Get started button is clicked
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// If no matching route is found default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/notes", function(req, res) {
  return res.sendFile(path.json(__dirname, "./db/db.json"));
});

// Start the server on the port
app.listen(PORT, function() {
  console.log("SERVER IS LISTENING: " + PORT);
});