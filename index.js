const { listContacts, getContactById, addContact, removeContact } = require('./contact');
const { program } = require('commander');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await listContacts();
      console.table(allContacts);
      break;

    case 'get':
      const findContact = await getContactById(id);
      console.table(findContact);
      break;

    case 'add':
      const newContact = await addContact(id, name, email, phone);
      console.table(newContact);
      break;

    case 'remove':
      const removeContacts = await removeContact(id);
      console.table(removeContacts);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

program
  .option('-a, --action, <type>')
  .option('-i, --id, <type>')
  .option('-n, --name,<type>')
  .option('-e, --email, <type>')
  .option('-p, --phone, <type>');

program.parse();
const options = program.opts();
invokeAction(options);
