const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//listening
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });