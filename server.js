const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//routes
const apiRoutes = require("./routes/apiRoutes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes");

//
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



//listening
app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
  });