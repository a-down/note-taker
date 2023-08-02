const router = require('express').Router();
// const authenticate = require('../utils/readname');
const notesData = require('../util/db/db.json');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// console.log(notesData)



router.get('/notes', (req, res) => {
  res.status(200).json(notesData)
  console.log('notes sent to request')
})

router.get('/notes/:id', (req, res) => {
  // const request = req.body
  // console.log((request))
  console.log(req.params)
  let foundNote
  notesData.forEach((note) => { 
    if (note.noteId === req.params.id) {
      foundNote = note  
    }})
  console.log(foundNote)
  res.status(200).json(foundNote)
})

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

router.put('/:id', (req, res) => {
  // ...
})

router.delete('/:id', (req, res) => {
  // ...
})



module.exports = router;