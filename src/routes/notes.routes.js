const { Router } = require('express')
const router = Router()

const {
    renderNotesForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');

const Note = require('../models/Notes');
// const { isAuthenticated } = require('../helpers/auth');

// New Note
router.get('/notes/add', renderNotesForm);
router.post('/notes/new-note', createNewNote);

//Get all notes
router.get('/notes', renderNotes);

// Edit notes
router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id', updateNote);

// Delete notes
router.delete('/notes/delete/:id', deleteNote);

module.exports = router