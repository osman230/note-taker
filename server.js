const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const database = require('./Develop/db/db.json');
const { util } = require('prettier');


//
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

//routes

                //HTML

app.get('/notes', (request, respond) => {
    respond.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});
app.get('*', (request,respond) => {
    respond.sendFile(pathFile(__dirname, "./Develop/public/index.html"));
});
app.get('/index', (request, respond) => {
    respond.sendFile(pathFile(__dirname, './Develop/public/index.html'));
});


                //API

app.get("/api/notes", function(request, respond) {
});

const notes = JSON.parse(fs.readFileSync(database), 'utf8');
const noteInfo = (notes.length).toString();

app.post("/api/notes", function(request, respond) {
    let addTask = req.body;
    addTask.id = noteInfo;
    notes.push(addTask);
    fs.writeFileSync((database), JSON.stringify(notes));
    respond.json(notes);
});

app.delete("/api/notes/:id", function(request, respond) {
    let deleteTask = (req.params.id).toString();
    notes = notes.filter(selected => {
        return selected.id != deleteTask; 
    });
    fs.writeFileSync((database), JSON.stringify(notes));
    respond.json(notes);
});



//listening

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
