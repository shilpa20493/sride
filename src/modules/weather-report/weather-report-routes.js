const express = require('express');
const weatherReportController = require('./weather-report-controller');
let expressRouter = express.Router();
let WeatherReportController = new weatherReportController();
module.exports = function weatherReports(app) {
	expressRouter
		.route('/getWeatherReportForToday')
        .get(WeatherReportController.getWeatherReportForToday
            .bind(WeatherReportController));
	return expressRouter;
};