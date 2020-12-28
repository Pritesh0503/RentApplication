var express = require('express');
var router = express.Router();
const controller = require('../controller/userController');

router.post('/createProfile', controller.createProfile);
router.put('/updateUser', controller.updateProfile);
router.delete('/deleteUser', controller.deleteUser);

module.exports = router;
