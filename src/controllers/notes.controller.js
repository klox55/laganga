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
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM notes  WHERE `notes`.`id` = ?',
        [req.params.id], function (error, result) {
           if (error) {
              throw error;
           } else {
              if (result.length > 0) {
                //  console.log('>> results: ', result); 
                 var string = JSON.stringify(result);
                 string = string.slice(1, -1); 
                //  console.log('>> string: ', string); 
                 var note = JSON.parse(string); 
                 // console.log('>> json: ', json); 
                 // console.log('>> user.name: ', json[0].id); 
                 console.log(note);
                 res.render('notes/edit-note',{note});
              } else {
                 console.log('Registro no encontrado');
              }
           }
        });
     });
};
notesCrtl.updateNote = (req, res) => {
    const { title,description } = req.body;

    req.getConnection(function(err,connection){
        connection.query('UPDATE `notes` SET `title` = ?, `description` = ? WHERE `notes`.`id` = ?',
        [title,description,req.params.id], function (error, result) {
            if (error) {
                throw error;
            } else {
                if (0 < result.affectedRows)
                    console.log('Successfully update');
                else
                    console.log('Error in Update');
            }
        }
        )
    })
    res.redirect('/notes');
};

notesCrtl.deleteNote = (req, res) => {

    req.getConnection(function(err,connection){
        connection.query('DELETE FROM `notes` WHERE `notes`.`id` = ?',
        [req.params.id], function (error, result) {
            if (error) {
                throw error;
            } else {
                if (0 < result.affectedRows)
                    console.log('Successfully removed');
                else
                    console.log('Error in Delete');
            }
        }
        )
    })
    res.redirect('/notes');
    
};

module.exports = notesCrtl;