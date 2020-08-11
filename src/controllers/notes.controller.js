const notesCrtl = {};
const Note = require('../models/Note');
const Notes = require('../models/Notes');


notesCrtl.renderNotesForm = (req, res) => {
    res.render('notes/new-note');
};

notesCrtl.createNewNote = async (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;
    await Note.insertNote(title,description,'Function');    
    // res.send('createNewNote');
    res.redirect('/notes');
};

notesCrtl.renderNotes = (req, res) => {
    // var string = JSON.stringify(Notes.query._results); // Se traen los resultados
    // var string2 = string.slice(1,-1)
    // var json = JSON.parse(string2); 
    var json = JSON.parse(JSON.stringify(Notes.query._results).slice(1,-1));    
    res.render('notes/all-notes',{json});
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