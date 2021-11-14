const path = require('path');

module.exports = (app) => {
    app.get('/notes', (request, respond) => {
        respond.sendFile(path.join(__dirname, "./develop/public/notes.html"));
    });
    app.get('*', (request,respond) => {
        respond.sendFile(pathFile(__dirname, "./develop/public/index.html"));
    });
    app.get('/index', (request, respond) => {
        respond.sendFile(pathFile(__dirname, './develop/public/index.html'));
    });
};
