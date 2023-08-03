const router = require('express').Router();
// const authenticate = require('../utils/readname');
const notesData = require('../util/db/db.json');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// console.log(notesData)


// API request to get all notes
router.get('/notes', (req, res) => {
  res.status(200).json(notesData)
  console.log('notes sent to request')
})

// API request for a particular note
router.get('/notes/:id', (req, res) => {
  console.log(req.params)
  let foundNote
  notesData.forEach((note) => { 
    if (note.noteId === req.params.id) {
      foundNote = note  
    }})
  console.log(foundNote)
  res.status(200).json(foundNote)
})

// API request to post new notes to the database
router.post('/notes', (req, res) => {
  console.log(req.body)
  const {title, text} = req.body
  const newNote = {
    title, 
    text, 
    noteId: uuidv4(),
  }

  notesData.push(newNote)
  console.log(notesData)

  fs.writeFile('./util/db/db.json', `${JSON.stringify(notesData)}`, (error) => {
      error ? console.log(error) : console.log('New note saved to database.')
  })
  res.status(200).json(JSON.stringify(notesData))
})

// API request to delete a note
  // called with delete button next to note on notes page
router.delete('/notes/:id', (req, res) => {
  console.log(req.params)

  for (i = 0; i < notesData.length; i++) {
    if (notesData[i].noteId === req.params.id) {
      notesData.splice(i, 1)
      console.log(i)
    }
  }

  fs.writeFile('./util/db/db.json', `${JSON.stringify(notesData)}`, (error) => {
    error ? console.log(error) : console.log('Note has been deleted.')
  })
  
  res.status(200).json({ msg: 'Note is deleted.'})
})



module.exports = router;