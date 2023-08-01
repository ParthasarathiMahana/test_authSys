const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// authentication using passport and passport local strategy
passport.use(new LocalStrategy({usernameField: 'email', passReqToCallback: true},
    async function(req, email, password, done) {
      try{
        const user = await User.findOne({ email: email });
        if (!user || !await bcrypt.compare(password, user.password)){
          req.flash("error", "invalid email or password");
          // console.log("invalid email or password");
          return done(null, false);
        }
        return done(null, user);
      }
      catch(err){
        return done(err);
      }
    })
);

// serialization
passport.serializeUser(function(user, done){
    done(null, user.id);
})

// deserialization
passport.deserializeUser(async function(id, done){
  try{
    const user = await User.findById(id);
    return done(null, user);
  }catch(error){
    return done(error);
  }
})

passport.checkAuthentication = function(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  return res.redirect('/');
}

passport.setAuthenticatedUser = (req, res, next)=>{
  if(req.isAuthenticated()){
    res.locals.user = req.user;
  }
  next();
}

module.exports = passport;