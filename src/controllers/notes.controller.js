const notesCrtl = {};
// const Notes = require('../models/Notes');

// const Notes = require('../models/Notes');


notesCrtl.renderNotesForm = (req, res) => {
    res.render('notes/new-note');
};

notesCrtl.createNewNote = (req, res) => {
    const { title, description } = req.body;

    req.getConnection(function(err,connection){
        connection.query('INSERT INTO notes(title, description,user) VALUES( ?, ?, ?)',
        [title, description, "si"], function (error, result) {
            if (error) {
                throw error;
            } else {
                if (0 < result.affectedRows)
                    console.log('Inserted Correct');
                else
                    console.log('Error in insert');
            }
        }
        )
    })
    res.redirect('/notes');
};

notesCrtl.renderNotes = (req, res) => {
    
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM notes', function (error, result) {
           if (error) {
              throw error;
           } else {
              if (result.length > 0) {
                //  console.log('>> results: ', result); 
                 var string = JSON.stringify(result); 
                //  console.log('>> string: ', string); 
                 var json = JSON.parse(string); 
                 // console.log('>> json: ', json); 
                 // console.log('>> user.name: ', json[0].id); 
                 res.render('notes/all-notes',{json});
              } else {
                 console.log('Registro no encontrado');
              }
           }
        });
     });
};

notesCrtl.renderEditForm = (req, res) => {
    res.send('renderEditForm');
};
notesCrtl.updateNote = (req, res) => {
    res.send('updateNote');
};

notesCrtl.deleteNote = (req, res) => {
    res.send('deleteNote');
};

module.exports = notesCrtl;