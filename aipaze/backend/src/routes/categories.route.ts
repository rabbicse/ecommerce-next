const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller');

/* GET programming languages. */
router.get('/', categoriesController.get);
  
// /* POST programming language */
// router.post('/', programmingLanguagesController.create);

// /* PUT programming language */
// router.put('/:id', programmingLanguagesController.update);

// /* DELETE programming language */
// router.delete('/:id', programmingLanguagesController.remove);

module.exports = router;