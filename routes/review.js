const express = require('express');
const router = express.Router();

// routes for dog and owner reviews

router.post('/owner/:ownerId', (req, res) => {
  // TODO: create new row in owner review table
  res.sendStatus(200);
})

router.post('/dog/:dogId', (req, res) => {
  // TODO: create new row in dog review table
  res.sendStatus(200);
})