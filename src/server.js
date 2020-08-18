const express = require('express');
const exphbs = require('express-handlebars');// motodor de plantillas de html
const path = require('path');// modulo para contatenar dirrecciones en windows y linux
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const methodOverride = require('method-override');

// initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 7000 );
app.set('views',path.join(__dirname,'views')) // dirname obtine la direccion completa

app.engine('hbs',exphbs({  // Configuración del motor de plantillas
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); // establecer el motor de plantillas

// Middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); // los Datos que llegen atravez de un formulario seran JSON 
app.use(methodOverride('_method'))

app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'laganga',
    port: 3306
 },'single'));
 


// Global variables

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Static files
app.use(express.static(path.join(__dirname,'public')));


module.exports = app;