const express = require('express');
const router = express.Router();
const controller = require('../controller/authOperation');

router.post('/register', controller.register);
router.get('/login/:id/:pwd', controller.login);
router.get('/', (req, res)=> res.send('hello'));
router.get('/getInfo/:userToken/:userID', controller.userInfo);

module.exports = router;