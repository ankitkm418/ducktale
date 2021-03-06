const express = require('express');
const router = express.Router();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const appController = require('./controller/controller');


router.get('/Create', appController.findForm);

router.post('/Create', appController.createForm);
router.post('/update/:id', appController.update);
router.get('/delete/:id', appController.delete);



module.exports = router;