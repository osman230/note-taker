const fs = require('fs');
const express = require('express');
const app = express();
const PORT = proces.env.PORT || 3000;
const database = require('./Develop/db/db.json');


//
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

//routes

const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

//listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
