const express = require('express');
const route = express.Router();

const FarmerController = require('../controller/FarmerController/Farmer');

// Route to add a new farmer
route.post('/addFarmer', FarmerController.addFarmer);
route.get('/getAllFarmers', FarmerController.getAllFarmers);
route.get('/getFarmerByID/:id', FarmerController.getFarmerByID);
route.put('/updateFarmer/:id', FarmerController.updateFarmer);
route.delete('/deleteFarmer/:id', FarmerController.deleteFarmer);
route.get('/getFarmerByCustomerNumber/:customerNumber', FarmerController.getFarmerByCustomerNumber);


module.exports =  route;
