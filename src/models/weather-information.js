const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new mongoose.Schema({
    request_time : {type: Date, required: true},
    response: {type: Schema.Types.Mixed, required: true}
});

module.exports = mongoose.model('weatherinformation', schema);