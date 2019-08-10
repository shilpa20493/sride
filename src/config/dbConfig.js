const mongoose = require('mongoose');
const bluebird = require('bluebird');
const config = require('./config');
mongoose.Promise = bluebird;
mongoose.set('debug', false);
const options = {
    // autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    promiseLibrary: bluebird,
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 20, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true
  };

const connectWithRetry = () => {
  console.log('MongoDB connection with retry');
  const db = mongoose.connect(config.dburl, options).then(()=>{
    console.log('MongoDB is connected');
  }).catch(err=>{
    console.log('MongoDB connection unsuccessful, retry after 5 seconds.');
    setTimeout(connectWithRetry, 5000);
  });
};

connectWithRetry();

var gracefulExit = function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection with MongoDB is'+
    'disconnected through app termination');
    process.exit(0);
  });
};
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
