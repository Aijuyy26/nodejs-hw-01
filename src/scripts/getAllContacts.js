const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');

function getAllContacts() {
  return JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
}

module.exports = getAllContacts;
