const fs = require("fs").promises;
class Nodejs26Error extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class WrongParametersError extends Nodejs26Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotAuthorizedError extends Nodejs26Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}
const error = (status, message) => {
  const newError = new Error(message);
  newError.status = status;
  return newError;
};

const isAccessible = (path) => {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
};

const createFolderIsNotExist = async (folder) => {
  if (!(await isAccessible(folder))) {
    await fs.mkdir(folder);
  }
};

module.exports = {
  NotAuthorizedError,
  WrongParametersError,
  Nodejs26Error,
  error,
  createFolderIsNotExist,
};
