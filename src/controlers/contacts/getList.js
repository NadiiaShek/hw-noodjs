const server = require("../../services/contacts");

const getList = async (req, res) => {
  try {
    console.log("req.user", req.user);
    const { _id: userId } = req.user;

    const list = await server.listContacts(userId);

    console.log("list", list);
    res.json(list);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getList,
};
