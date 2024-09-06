module.exports.errResp = (statusCode, err, res) => {
  if (err.name && err.name.toLowerCase().startsWith("sequelize")) {
    let type = err.errors[0].type;
    let message = err.errors[0].message;

    err = new Error();

    err.type = type;
    err.message = message;
  }

  if (err?.name?.startsWith("Error")) {
    type = err.type;
    message = err.message;

    err = new Error();

    err.type = type;
    err.message = message;
  }

  if (err.name && err.name.toLowerCase().includes("token")) {
    statusCode = 401;
  }

  if (err.type && err.type === "unique violation") {
    statusCode = 400;
  }

  if (err["_original"]) {
    err = {
      details: err.details.map(({ message, type }) => ({
        message: "field " + message.replace(/['"]/g, ""),
        type,
      })),
    };
  }

  return res.status(statusCode).json({
    error: err,
    success: false,
    data: null,
  });
};

module.exports.httpResp = (statusCode, data, res) => {
  return res.status(statusCode).json({
    error: null,
    success: true,
    data: data,
  });
};

module.exports.unAuthResp = (res) => {
  return res.status(401).json({
    message: "Access Denied",
    data: null,
    error: "User is Unauthorised",
  });
};
