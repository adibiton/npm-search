'use strict'
const app = require('express')();
const bodyParser = require('body-parser');
const config = require('./config');
const packageMD = require('./package-details');

app.use(bodyParser.json());
app.use('/package', packageMD.routes);
app.listen(config.server.port, ()=> {
	console.log(`server is listening on port ${config.server.port}`);
});
