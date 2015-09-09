var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Lobster = new Schema ({
  name: String,
  hobbies: String,
});

process.env.DB_HOST = 'mongodb://localhost/node-lobsters';

mongoose.connect(process.env.DB_HOST);

module.exports = mongoose.model('lobster', Lobster);
