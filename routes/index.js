const express = require('express');
const router = express.Router();
const { forwardAuthenticated } = require('../config/middleware/auth');

router.get('/', forwardAuthenticated, (req, res) => {
  // TODO: replace this view with homepage
  res.render('register');
})

router.get('/register', forwardAuthenticated, (req, res) => {
  res.render('register');
})

module.exports = router;