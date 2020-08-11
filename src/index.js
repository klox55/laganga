require('dotenv').config(); // metodo para leer .evn 

const app = require('./server');

console.log('OFF DB');
require('./database');

app.listen(app.get('port'),() => {
    console.log('Server on port',app.get('port'));
})