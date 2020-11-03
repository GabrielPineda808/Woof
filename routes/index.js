const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../config/middleware/auth');

router.get('/', isLoggedIn, (req, res) => {
  let navView = req.isLoggedIn;
  res.render('index', { navView });
})

module.exports = router;