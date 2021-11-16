const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


//routes
require("./routes/apiRoutes/apiRoutes")(app);
require("./routes/htmlRoutes/htmlRoutes")(app);

//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



//listening
app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
  });