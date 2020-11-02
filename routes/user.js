const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');

// user login/logout/profile routes

router.get('/', ensureAuthenticated, async (req, res) => {
  const { email , name , gender, bio } = req.user;
   const dog = await db.dog.findAll({where :{
    userId: req.user.id
  }});
  console.log(dog);
  console.log(req.user);
  res.render('userprofile', {email, name, gender, bio, dog});
})

router.get('/login', (req, res) => {
  res.render('login', { success: req.flash('login'), logout: req.flash('logout') });
})

// router.get('/login', forwardAuthenticated, (req, res) => {
//   res.render('login', { success: req.flash('login'), loginErrors: req.flash('error'), logout: req.flash('logout')});
// })

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
  res.redirect('/user/login')
})

router.get('/:ownerName/:dogId', (req, res) => {
  // TODO: replace this view with dog profile
  res.sendStatus(200);
})

module.exports = router;