var mysql = require('mysql');
var myConnection = require('express-myconnection');

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;


console.log('ON DB');


var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'laganga',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta con la base de datos al arranque.');
   }

});

module.exports = connection;
