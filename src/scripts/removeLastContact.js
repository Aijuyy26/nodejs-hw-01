const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');

function removeLastContact() {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  if (contacts.length > 0) {
    contacts.pop();
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
  }
}

module.exports = removeLastContact;
