const fs = require("fs").promises;
const path = require("path");

const listContacts = async () => {
  try {
    const data = await fs.readFile(
      path.resolve("./models/contacts.json"),
      "utf8"
    );
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.error(err);
  }
};
const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(
      path.resolve("./models/contacts.json"),
      "utf8"
    );

    const parsedData = JSON.parse(data);

    parsedData.forEach((contact) => {
      if (contact.id === contactId.toString()) {
        return contact;
      }
    });
  } catch (err) {
    console.error(err);
  }
};
const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(
      path.resolve("./models/contacts.json"),
      "utf8"
    );

    const parsedData = JSON.parse(data);
    const index = parsedData.findIndex((contact) => {
      return contact.id === contactId.toString();
    });

    parsedData.splice(index, 1);

    await fs.writeFile(
      "./models/contacts.json",
      JSON.stringify(parsedData),
      "utf8"
    );
    console.table(parsedData);
  } catch (err) {
    console.error(err);
  }
};
const addContact = async (name, email, phone) => {
  console.log("addContact");
  try {
    const data = await fs.readFile(
      path.resolve("./models/contacts.json"),
      "utf8"
    );
    const parsedData = JSON.parse(data);
    phone = phone.toString();
    const newContact = {
      name,
      email,
      phone,
    };
    parsedData.push(newContact);

    await fs.writeFile(
      "./models/contacts.json",
      JSON.stringify(parsedData),
      "utf8"
    );
    console.table(parsedData);
  } catch (err) {
    console.error(err);
  }
};

const updateContact = async (contactId, body) => {
  try {
    const data = await fs.readFile(
      path.resolve("./models/contacts.json"),
      "utf8"
    );
    const parsedData = JSON.parse(data);
    let targetContact = null;
    parsedData.forEach((contact) => {
      if (contact.id === contactId) {
        if (body.name) {
          contact.name = body.name;
        }
        if (body.email) {
          contact.email = body.email;
        }
        if (body.phone) {
          contact.phone = body.phone;
        }
        targetContact = contact;
      }
    });
    await fs.writeFile(
      "./models/contacts.json",
      JSON.stringify(parsedData),
      "utf8"
    );
    return targetContact;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
