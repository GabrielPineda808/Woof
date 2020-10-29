const express = require('express');
const passport = require('../config/passport');
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');

// user login/logout/dog profile routes

const router = express.Router();

router.get('/', ensureAuthenticated, (req, res) => {
  // TODO: replace this view with user profile
  res.sendStatus(200);
})

router.get('/login', forwardAuthenticated, (req, res) => {
  res.render('login', { success: req.flash('login'), loginErrors: req.flash('error'), logout: req.flash('logout')});
})

router.post('/login', (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: '/user',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req,res,next);
})

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('logout', 'You have successfully logged out.')
  res.redirect('/')
})

router.get('/:dogId', (req, res) => {
  // TODO: replace this view with dog profile
  res.sendStatus(200);
})

router.get('/dog_register', (req, res) => {
  // TODO: replace this view with register new dog profile
  res.sendStatus(200);
})

module.exports = router;