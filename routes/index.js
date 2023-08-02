const router = require('express').Router();
// const authenticate = require('../utils/readname');
const notesData = require('../util/db/db.json');
const fs = require('fs')

// console.log(notesData)



router.get('/notes', (req, res) => {
  res.status(200).json(notesData)
  console.log('notes sent to request')
})

router.get('/:id', (req, res) => {
  // ...
})

router.post('/notes', (req, res) => {
  console.log(req.body)
  notesData.push(req.body)
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