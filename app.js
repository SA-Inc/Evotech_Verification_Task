'use strict';

// App Configuration.
const configs = require(__dirname + '/api/configs/config.json');

// Web Applications Framework.
const express = require('express');
const bodyParser = require('body-parser');
const uinRoutes = require(__dirname + '/api/routes/uin.js');

// App Init.
const app = express();
const serverPort = configs.port;



app.use(bodyParser.urlencoded({
   extended: false,
}));
app.use(bodyParser.json());
app.use('/api', uinRoutes);



app.listen(serverPort, (err) => {
   if (err) {
      console.error(`Something went wrong. Error: ${err}`);
   }
   console.log(`Server listening on port: ${serverPort}`);
});
