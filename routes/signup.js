const express = require('express');
const router = express.Router();
const signupController = require('../controller/singup_controller')

router.use('/', signupController.signup);

module.exports = router;