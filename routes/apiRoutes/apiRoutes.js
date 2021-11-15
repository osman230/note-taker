const fs = require('fs');
const express = require('express');
const path = require('path');
const database = require('../../db/db.json');

//
// const data = req.param.id;
// const task = JSON.parse()
// const newData = task.filter(({id}) => id !== data);
//

app.get('/notes', function(res, req) {
    res.json(database);
});

app.post("/notes", function(req,res) {
    database.push(req.body);
    fs.readFileSync(path.join(__dirname, '../../db/db/json'), JSON.stringify(database, null, 2));
    res.json();
    });


