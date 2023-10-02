const express = require('express');

const router = express.Router();
const {
  getUsers,
  registerUser,
  deleteUser,
  updateUser,
  loginUser,
} = require('../controllers/userControllers');

router.route('/').get(getUsers).post(registerUser).delete(deleteUser).put(updateUser);
router.route('/login').post(loginUser);

module.exports = router;
