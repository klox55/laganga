var mysql = require('mysql');
var myConnection = require('express-myconnection');
// const app = require('./server');
var express = require('express');
const app = express();

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;


console.log('ON DB');


app.use(myConnection(mysql,{
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'laganga',
   port: 3306
},'single'));

