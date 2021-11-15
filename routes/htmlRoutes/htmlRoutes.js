const fs = require('fs');
const express = require('express');
const path = require('path');

//

module_exports = function (app) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './develop/public/index.html'));
    });

    app.get('./notes', (req, res) => {
        res.sendFile(path.join(__dirname, './develop/public/notes.html'));
    });
};