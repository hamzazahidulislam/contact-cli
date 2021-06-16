const mongoose = require('mongoose');

// Contact Schema
const contactSchema = mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  }
});

// Define and export
module.exports = mongoose.model('Contact', contactSchema);