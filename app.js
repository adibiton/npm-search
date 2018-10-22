'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const packageMD = require('./package-details');

const app = express()
app.use(bodyParser.json());
app.use(express.static('public'))
app.use('/package', packageMD.routes);
app.listen(config.server.port, ()=> {
	console.log(`server is listening on port ${config.server.port}`);
});
