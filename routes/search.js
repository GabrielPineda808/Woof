const express = require('express');
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');
// routes for searches

router.get('/', ensureAuthenticated ,(req, res) => {
  // TODO: replace this view with search page
  res.render('search');
})

module.exports = router;
