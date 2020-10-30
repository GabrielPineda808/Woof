const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// const db = require('../models');

passport.use(new LocalStrategy(
  { 
    usernameField: "email" 
  }, 
  async function strategy1(email, password, done) {
    let user = await db.User.findOne({ where: { email: email }});
    if (!user) {
      return done(null, false, { message: "Incorrect email."})
    };
  
    let pwValidate = await user.validPassword(password);
    if (!pwValidate) {
      return done(null, false, { message: "Incorrect password."})
    };
  
    return done(null, user);
  })
)

passport.serializeUser(function(user, done) {
  done(null, user.id);
})

passport.deserializeUser(async function(id, done) {
  let user = await db.User.findOne({ where: { id: id}});
  done(null, user);
})

module.exports = passport;