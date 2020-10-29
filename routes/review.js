const express = require('express');
const router = express.Router();

// routes for dog and owner reviews

router.get('/owner/:ownerId', (req, res) => {
  // TODO:
  res.sendStatus(200);
})

router.get('/dog/:dogId', (req, res) => {
  // TODO:
  res.sendStatus(200);
})