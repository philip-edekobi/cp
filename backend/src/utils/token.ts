const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

module.exports.generateToken = (payload) => {
  try {
    const token = jwt.sign(payload, secret, {
      expiresIn: "2h",
    });

    return token;
  } catch (err) {
    throw err;
  }
};

module.exports.verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);

    return payload;
  } catch (err) {
    throw err;
  }
};
