// Authentication middleware
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      // If your logged in I call the next route
      next();
    }
  };
  
  module.exports = withAuth;