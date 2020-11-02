const express = require('express');
const router = express.Router();

// routes for searches

router.get('/', (req, res) => {
  // TODO: replace this view with search page
  res.render('search');
})

module.exports = router;
