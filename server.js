var express = require('express');
var app = express();
var mysql=require('mysql');
app.get('/', function (req, res) {
    console.log('Hello World!');
});

var server = app.listen(8100, function () {
    console.log('load Success!');
});

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

dbConnection.query('select * from user', function (err, rows, fields) {
    console.log(rows);
});

app.get('/test', function (req, res) {
    dbConnection.query('select * from test_table', function (err, rows, fields) {
        res.json(rows);
    });
});
