
const connection = require('../database');

const insertNote = (title, description, user) => {

    connection.query('INSERT INTO notes(title, description,user) VALUES( ?, ?, ?)',
        [title, description, user], function (error, result) {
            if (error) {
                throw error;
            } else {
                if (0 < result.affectedRows)
                    console.log('Inserted Correct');
                else
                    console.log('Error in insert');

            }
        }
    );
}


module.exports = {insertNote};