const express = require('express');
const route = express.Router();

const FarmerController = require('../controller/FarmerController/Farmer');

// Route to add a new farmer
route.post('/addFarmer', FarmerController.addFarmer);


module.exports =  route;
