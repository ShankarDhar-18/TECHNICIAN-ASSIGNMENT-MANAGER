const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register',authCtrl.register);
router.post('/login',authCtrl.login);
router.get('/dashboard',authCtrl.dashboard,authMiddleware);

module.exports = router;