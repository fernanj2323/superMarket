const express = require('express');
const router = express.Router(); 
categoryCTRL = require('../controllers/category.controller');

router.get('/getCategories', categoryCTRL.getCategories);
router.post('/postCategory', categoryCTRL.postCategory);
router.put('/putCategory/:id', categoryCTRL.putCategory);
router.delete('/deleteCategory/:id', categoryCTRL.deleteCategory)


module.exports = router;  