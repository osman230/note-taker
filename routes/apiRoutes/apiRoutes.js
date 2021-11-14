const fs = require('fs');
const database = require('./develop/db/db.json');
const path = require('path');

module.exports = function(app) {
    app.get("/api/notes", function(request, respond) {
        respond.json(database);
    });

    app.post("/api/notes", function(request, respond) {
        database.push(req.body);
        respond.json(true);
    });

    app.delete("/api/notes", function(request, respond) {
        database.length = 0;
        respond.json({ ok: true });
    })
};