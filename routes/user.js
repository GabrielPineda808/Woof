const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const db = require("../models")
const { forwardAuthenticated, ensureAuthenticated, forwardToProfile, isLoggedIn } = require('../config/middleware/auth');

// view your own profile
router.get('/', ensureAuthenticated, isLoggedIn, async (req, res) => {
  const { email , name , gender, bio } = req.user;
  const dog = await db.dog.findAll({ where: { 
    userId: req.user.id 
  }, include: [db.dogReview] });
  let userEdit = req.isLoggedIn;
  let navView = req.isLoggedIn;
  res.render('userprofile', { userEdit, navView, email, name, gender, bio, dog });
})

// show edit profile page
router.get('/edit', isLoggedIn, (req, res) => {
  const { email , name , bio } = req.user;
  let navView = req.isLoggedIn;
  res.render("userEdit", { navView, email, name, bio } )
})

// show edit dog profile page
router.get('/edit/dog', async (req, res) => {
  const dog = await db.dog.findAll({ where : { userId: req.user.id } });
  let dogEdit; 
  res.render("userEdit", { dogEdit: true, dog })
})

// show login page
router.get('/login', forwardAuthenticated, (req, res) => {
  res.render('login', { success: req.flash('login'), logout: req.flash('logout'), loginErrors: req.flash('error') });
})

// authenticate login request
router.post('/login', (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: '/user',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req,res,next);
})

// logout user and redirect to login page
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('logout', 'You have successfully logged out.')
  res.redirect('/user/login')
})

// view someone else's profile
router.get('/:userId', forwardToProfile, isLoggedIn, async ( req, res) => {
  let userID = req.params.userId;
  const user = await db.user.findOne({where :{
    id: userID
  }, include: [db.userReview] })
  const dog = await db.dog.findAll({where :{
    userId: userID
  }, include: [db.dogReview] });
  let navView = req.isLoggedIn;
  res.render('userprofile', { viewerEmail: req.user.email, id: user.id, email: user.email , name: user.name, gender: user.gender, bio: user.bio, dog, user, navView});
})


module.exports = router;