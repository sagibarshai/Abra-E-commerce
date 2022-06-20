const express = require('express');
const { check } = require('express-validator');

const userControllers = require('../../controllers/user');
const router = express.Router();
router.post(
  '/signup',
  check('email').isEmail(),
  check('password').isLength({ min: 5, max: 20 }),
  check('username').isLength({ min: 2, max: 15 }),
  userControllers.signup
);
router.put(
  '/login',
  check('email').isEmail(),
  check('password').isLength({ min: 5, max: 20 }),
  userControllers.login
);
module.exports = router;
