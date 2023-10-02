const express = require('express');

const router = express.Router();
const { getUsers, registerUser } = require('../controllers/userControllers');

router.route('/').get(getUsers).post(registerUser);

module.exports = router;
