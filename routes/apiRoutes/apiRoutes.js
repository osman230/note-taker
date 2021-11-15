const fs = require('fs');
const express = require('express');
const path = require('path');
const database = require('./develop/db/db.json');

//
const newTask = req.body;
const data = req.param.id;
const task = JSON.parse()
const newData = task.filter(({id}) => id !== data);
//
module_exports = function(app) {
    app.get("/api/notes", function(req,res) {
        fs.readFile(database);
    });

    app.post("/api/notes", function(req,res) {
        fs.readFile('./db/db/json');
        JSON.parse(data).push(req.body);

        fs.writeFile('/db/db.json');
        res.json(req.body)
    });
};
