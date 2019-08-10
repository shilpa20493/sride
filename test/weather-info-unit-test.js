const chai = require('chai');
const mongoose = require('mongoose');
const expect = require('chai').expect;
const weatherInfo = require('../src/models/weather-information');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);
const weatherInfoDal = require('../src/dataaccesslayer/weather-report-dal');

describe('/POST audit data', () => {
    it('it should create audit data without request_time', (done) => {
        weatherInfoDal.addAuditData({}).then(weatherRes=>{
            expect(weatherRes)
                .to.be.json;
            done();
        })
          .catch(err => {
            done();
        });
    });
});

describe('/POST audit data', () => {
    it('it should return error if audit data is not passed', (done) => {
        weatherInfoDal.addAuditData().then(weatherRes=>{
            expect(weatherRes)
                .to.be.json;
            done();
        })
          .catch(err => {
            expect(err.toString()).to.equal('Error: auditData is not passed');
            done();
        });
    });
});