const bcrypt = require("bcryptjs");

module.exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    return passwordHash;
  } catch (err) {
    throw err;
  }
};

module.exports.comparePasswordWithHash = async (password, pHash) => {
  try {
    const matched = await bcrypt.compare(password, pHash);

    return matched;
  } catch (e) {
    throw e;
  }
};
