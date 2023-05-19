
const fs = require('fs').promises;
const path = require('node:path');

const contactsPath = path.resolve('./db/contact.json');

// TODO: задокументувати кожну функцію
function listContacts() {
  const readFile = async () => {
    const contacts = await fs.readFile('./db/contact.json', 'utf-8');
    console.log(contacts);
  };
  readFile();
}

function getContactById(contactId) {
  const findeContact = async () => {
    const contacts = await fs.readFile('./db/contact.json', 'utf-8');
    const parsedContacts = JSON.parse(contacts);
    const findeContact = parsedContacts.find(contact => contact.id === contactId);
    console.log(findeContact);
  };
  findeContact();
}

function removeContact(contactId) {
  const filterContact = async () => {
    const contacts = await fs.readFile('./db/contact.json', 'utf-8');
    const parsedContacts = JSON.parse(contacts);
    const findeContact = parsedContacts.filter(contact => contact.id !== contactId);
    console.log(findeContact);
  };
  filterContact();
}

function addContact(name, email, phone) {
  const createNewContact = async () => {
    const newContact = { name: name, email: email, phone: phone };
    console.log(newContact);
    };
    createNewContact()
}

module.exports = { contactsPath, listContacts, getContactById, removeContact, addContact };
