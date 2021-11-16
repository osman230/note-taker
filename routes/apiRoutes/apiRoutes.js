const fs = require('fs');
const path = require('path');
const database = require('../../db/db.json');
const express = require('express');
const app = express();

//
// const data = req.param.id;
// const task = JSON.parse()
// const newData = task.filter(({id}) => id !== data);
//

module.exports = (function(app) {
app.get('/api/notes', function(req, res) {
    res.json(database);
    });
});


// app.post("/api/notes", function(req,res) {
//     database.push(req.body);
//     fs.readFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(database, null));
//     res.json();
//     });

// });

app.post("/api/notes", function(req, res) {
      data = fs.readFileSync("../../db/db.json", "utf8");
      task = JSON.parse(task);
      req.body.id = notesData.length;
      task.push(req.body); 
      task = JSON.stringify(data);
      fs.writeFile("../../db/db.json", task, "utf8");
      res.json(JSON.parse(task));
    });