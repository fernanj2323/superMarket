const express = require('express');
const router = express.Router(); 
itemCTRL = require('../controllers/items.controller')

router.get('/getItems', itemCTRL.getItems);
router.get('/getItemById/:id', itemCTRL.getItemById);
router.post('/postItem', itemCTRL.postItem);
router.put('/putItem/:id', itemCTRL.putItem);
router.delete('/deleteItem/:id', itemCTRL.deleteItem);

module.exports = router;  