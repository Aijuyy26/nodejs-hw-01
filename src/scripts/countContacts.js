const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');

function countContacts() {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  return contacts.length;
}

module.exports = countContacts;
