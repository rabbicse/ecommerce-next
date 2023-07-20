const express = require('express');
const bannerRouter = express.Router();
const bannersController = require('../controllers/banners.controller');

/* GET programming languages. */
bannerRouter.get('/:id', bannersController.get);
  
// /* POST programming language */
// router.post('/', programmingLanguagesController.create);

// /* PUT programming language */
// router.put('/:id', programmingLanguagesController.update);

// /* DELETE programming language */
// router.delete('/:id', programmingLanguagesController.remove);

module.exports = bannerRouter;