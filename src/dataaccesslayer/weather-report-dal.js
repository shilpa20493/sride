const config = require('../config/config');
const weatherInfo = require('../models/weather-information');

module.exports.addAuditData = function (auditData) {
    return new Promise((resolve, reject) => {
        if (!auditData){
            throw new Error('auditData is not passed');
        }
        weatherInfo.create({
            'request_time' : new Date(),
            'response' : auditData
        })
            .then(insertedData => {
                resolve(insertedData);
            }).catch(err => {
                reject(err);
            });
    });
};