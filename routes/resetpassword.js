const express = require('express');
const router = express.Router();
const passport = require('passport');

const signinController = require('../controller/signin_controller');

router.use('/', signinController.resetPassword);

module.exports = router;