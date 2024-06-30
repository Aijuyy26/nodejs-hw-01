

removeAllContacts();
const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');

function removeAllContacts() {
  fs.writeFileSync(PATH_DB, JSON.stringify([], null, 2));
}

module.exports = removeAllContacts;
