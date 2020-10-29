const express = require('express');
const router = express.Router();
const { forwardAuthenticated } = require('../config/middleware/auth');

router.get('/', forwardAuthenticated, (req, res) => {
  // TODO: replace this view with homepage
  res.sendStatus(200);
})

module.exports = router;