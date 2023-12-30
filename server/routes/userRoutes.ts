const express = require('express');

const router = express.Router();
const {
  getUsers,
  registerUser,
  deleteUser,
  updateUser,
  loginUser,
  forgotPassword,
} = require('../controllers/userControllers');

router.route('/').post(registerUser).delete(deleteUser).put(updateUser);
router.route('/login').post(loginUser);
router.route('/forgot-password').post(forgotPassword);

module.exports = router;
