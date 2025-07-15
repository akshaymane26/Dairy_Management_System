const mongoose = require('mongoose');

 const farmerSchema = new mongoose.Schema({
    customerNumber: { 
        type: String,
         required: true, 
         unique: true
         },
    name: {
        type: String,
        required: true

    },
    mobile: {
        type: String,
        required: false,
        unique: true
    },
    address: {
        type: String,
        required: false 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
 })

 module.exports = mongoose.model('Farmer', farmerSchema);