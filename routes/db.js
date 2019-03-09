const express = require('express'),
mysql = require('mysql'),
app = express();


const options = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'girlcode'
}

db = mysql.createConnection(options);

db.connect(function (err) {
  if (err)
    throw err;
  console.log('Connected to Database: ' + options.database);
});

module.exports = db;