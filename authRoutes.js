const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator'); // middleware for validation
const authMiddleware = require('./middleware/authMiddleware');

router.post('/registration', [
  check('username', "user name can not be an empty string").notEmpty(),
  check('password', "password length should be gt 3 and lt 10").isLength({ min: 4, max: 10 }),
], controller.registartion);
router.post('/login', controller.login);
router.get('/users', authMiddleware, controller.getUsers);

module.exports = router;