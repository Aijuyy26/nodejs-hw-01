const fs = require('fs');
const { createFakeContact } = require('../utils/createFakeContact');
const { PATH_DB } = require('../constants/contacts');

function generateContacts(count) {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  for (let i = 0; i < count; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
}

module.exports = generateContacts;
