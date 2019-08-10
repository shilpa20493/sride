const express = require('express');
const http = require('http');
const helmet = require('helmet');
const app = express();
const config = require('./src/config/config');
const weatherApis = require('./src/modules/modules-routes');
//uncomment this line when the local connection to mongodb is ready for connection
//const db = require('./src/config/dbConfig');
app.use(helmet());
app.set('port', config.httpPort);
weatherApis(app);
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});