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

app.get("/api/notes/:id", function(req, res) {

  res.json(data[Number(req.params.id)]);

});


app.post("/api/notes", function(req, res) {

  let newNote = req.body;
  let uniqueId = (data.length).toString();
  console.log(uniqueId);
  newNote.id = uniqueId;
  data.push(newNote);
  
  fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
      if (err) throw (err);        
  }); 

  res.json(data);    

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