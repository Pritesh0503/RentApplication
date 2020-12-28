var express = require('express');
var router = express.Router();
const controller = require('../controller/itemController');

router.post('/addItem', controller.createItem);
router.put('/updateItem', controller.updateItem);
router.delete('/deleteItem', controller.deleteItem);

module.exports = router;
