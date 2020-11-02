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

module.exports = { ensureAuthenticated, forwardAuthenticated, forwardToProfile }