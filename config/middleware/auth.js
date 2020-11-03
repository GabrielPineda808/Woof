function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/register');
}

function forwardAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/user')
}

function forwardToProfile(req, res, next) {
  if (parseInt(req.params.userId) !== req.user.id) {
    return next();
  }
  res.redirect('/user');
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    req.isLoggedIn = true;
  } else {
    req.isLoggedIn = false;
  }
  return next();
}

module.exports = { ensureAuthenticated, forwardAuthenticated, forwardToProfile, isLoggedIn }