const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
const signinController = require('../controller/signin_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.use("/signup", require('./signup.js'));
router.use("/login", require('./signin.js'));
// router.use("/logout", require('./signout.js'));
router.post('/logout', signinController.signOut);

router.use("/resetpassword", require('./resetpassword.js'));


module.exports = router;