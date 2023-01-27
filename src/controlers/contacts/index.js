const { getList } = require("./getList");
const { getContactById } = require("./getContactById");
const { postContact } = require("./postContact");
const { deleteById } = require("./deleteById");
const { putById } = require("./putById");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getList,
  getContactById,
  postContact,
  deleteById,
  putById,
  updateStatusContact,
};
