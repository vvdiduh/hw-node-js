const fs = require('fs/promises');
const { nanoid } = require('nanoid');
const path = require('path');

const contactsPath = path.resolve('./db/contact.json');

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const findContact = contacts.find(contact => contact.id === contactId);
  return findContact || null;
}

async function addContact(id, name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name: name, email: email, phone: phone };

  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const findeContact = contacts.findIndex(contact => contact.id === contactId);
  if (findeContact === -1) {
    return null;
  }
  const [result] = contacts.splice(findeContact, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result; 
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
