const mongoose = require('mongoose');

// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/contact-app-cli', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// Import model
const Contact = require('./models/contact');

// Add Contact
const addContact = (contact) => {
  Contact.create(contact).then(contact => {
    console.info('New Contact Added');
    mongoose.connection.close();
  });
}

// Find Contact
const findContact = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  Contact.find({
      $or: [{
        firstname: search
      }, {
        lastname: search
      }]
    })
    .then(contact => {
      console.info(contact);
      console.info(`${contact.length} matches`);
      mongoose.connection.close();
    });
}

// Update Contact
const updateContact = (_id, contact) => {
  Contact.findOneAndUpdate({
      _id: _id
    }, contact)
    .then(contact => {
      console.info('Contact Updated');
      mongoose.connection.close();
    });
}

// Remove Contact
const removeContact = (_id) => {
  Contact.deleteOne({
      _id
    })
    .then(contact => {
      console.info('Contact Removed');
      mongoose.connection.close();
    });
}

// List Contacts
const listContacts = () => {
  Contact.find()
    .then(contacts => {
      console.info(contacts);
      console.info(`${contacts.length} contacts`);
      mongoose.connection.close();
    });
}

// Export All Methods
module.exports = {
  addContact,
  findContact,
  updateContact,
  removeContact,
  listContacts
}