const weatherReportDAL = require('../../dataaccesslayer/weather-report-dal');
let me = {};
module.exports = class WeatherReportController {
    constructor() {
        me = this;
    }
    async getWeatherReportForToday(req, res) {
        try {
            let today = new Date();
            let formattedDate = this.getFormattedDate(today);
            let isPrime = this.isPrime(parseInt(formattedDate));
            let response = {};
            if (isPrime) {
                response = {
                    statusCode: 200,
                    body: {
                        'temp': 306.15,
                        'pressure': 1013,
                        'humidity': 44,
                        'temp_min': 306,
                        'temp_max': 306
                    }
                };

            } else {
                response = {
                    statusCode: 200,
                    body: 'Date is not prime so no date'
                };
            }
            //uncomment this block if connection to database is ready
            /*
            const addAuditData = await weatherReportDAL.addAuditData(response);
            if (addAuditData){
                console.log('Audit data added to database successfully!');
            }
            else{
                console.log('Audit data could not be added to database');
            }
            */
            res.json(response);
        } catch (err) {
            res.status(500);
            res.json({
                statusCode: 500,
                body: err.toString()
            });
        }
    }

    isPrime(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    getFormattedDate(date) {
        let d = date.getDate().toString();
        (d.length == 1) && (d = '0' + d);
        return d;
    }
};