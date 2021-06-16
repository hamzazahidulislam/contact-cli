#!/usr/bin/env node

const program = require('commander');
const {
  prompt
} = require('inquirer');
const {
  addContact,
  findContact,
  updateContact,
  removeContact,
  listContacts,
} = require('./index');

// Contact Questions
const questions = [{
    type: 'input',
    name: 'firstname',
    message: 'Contact First Name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Contact Last Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Contact Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Contact Email Address'
  }
];

program
  .version('2.0.0')
  .description('Contact Management System')

// program
//   .command('add <firstname> <lastname> <phone> <email>')
//   .alias('a')
//   .description('Add a contact')
//   .action((firstname, lastname, phone, email) => {
//     addContact({firstname, lastname, phone, email});
//   });

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a contact')
  .action(() => {
    prompt(questions).then(answers => addContact(answers));
  });

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description('Find a contact')
  .action(name => findContact(name));

// Update Command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a contact')
  .action(_id => {
    prompt(questions).then(answers => updateContact(_id, answers));
  });

// Remove Command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a contact')
  .action(_id => removeContact(_id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List all contacts')
  .action(() => listContacts());

program.parse(process.argv);