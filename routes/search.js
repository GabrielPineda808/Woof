const express = require('express');
const router = express.Router();

// routes for searches

router.get('/search', (req, res) => {
  // TODO: replace this view with search page
  res.sendStatus(200);
})

module.exports = router;
