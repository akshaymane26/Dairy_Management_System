const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  customerNumber: { 
    type: String, 
    required: true, 
    unique: true 
  },

  // Full name split
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  },

  // Local language name
  localLanguageName: {
    type: String
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

  // Active/Inactive
  isActive: {
    type: Boolean,
    default: true
  },

  // Opening balance
  openingBalance: {
    type: Number,
    default: 0
  },
  balanceType: {
    type: String,
    enum: ['Credit', 'Debit'],
    default: 'Credit'
  },

  // Milk rate type
  milkRateType: {
    type: String,
    enum: ['Fixed Rates', 'By Rate Chart'],
    required: true
  },

  // Milk type
  milkType: {
    type: String,
    enum: ['Cow', 'Buffalo', 'Cow + Buffalo'],
    required: true
  },

  // Fixed rate fields (only used if milkRateType === 'Fixed Rates')
  fixedRates: {
    cow: {
      type: Number,
      default: 0
    },
    buffalo: {
      type: Number,
      default: 0
    }
  },

  // Rate chart reference (only used if milkRateType === 'By Rate Chart')
  rateCharts: {
    cow: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RateChart',
      default: null
    },
    buffalo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RateChart',
      default: null
    }
  },

  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Farmer', farmerSchema);



// const mongoose = require('mongoose');

//  const farmerSchema = new mongoose.Schema({
//     customerNumber: { 
//         type: String,
//          required: true, 
//          unique: true
//          },
//     name: {
//         type: String,
//         required: true

//     },
//     mobile: {
//         type: String,
//         required: false,
//         unique: true
//     },
//     address: {
//         type: String,
//         required: false 
//     },
//     createdAt: { 
//         type: Date, 
//         default: Date.now 
//     },
//  })

//  module.exports = mongoose.model('Farmer', farmerSchema);