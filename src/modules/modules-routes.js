const express = require('express');
let expressRouter = express.Router();
const weatherReports = require('./weather-report/weather-report-routes');
module.exports = function weatherApis(app){
	app.use('/weather', weatherReports(app));
	return app;
};