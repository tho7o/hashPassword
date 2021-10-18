'use strict'

const app = require('./app');
const port = 3800;

//Deploy on Port
app.listen (port, () => {
     console.log("Listening on port " + port);
   });

