const express= require('express');
const router= express.Router(); 
// const passport= require('passport');
const carsController= require('../controllers/cars_controller');
router.post('/create', carsController.create);

module.exports= router;