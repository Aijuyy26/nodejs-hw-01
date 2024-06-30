const fs = require('fs');
const { createFakeContact } = require('../utils/createFakeContact');
const { PATH_DB } = require('../constants/contacts');

function addOneContact() {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  const newContact = createFakeContact();
  contacts.push(newContact);
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
}

module.exports = addOneContact;
