import { Response } from "express";

module.exports.errResp = (statusCode: number, err: any, res: Response) => {
  if (err.name && err.name.toLowerCase().startsWith("sequelize")) {
    console.log(err);
    let type = err.errors[0].type;
    let message = err.errors[0].message;

    err = new Error();

    err.type = type;
    err.message = message;
  }

  if (err?.name?.startsWith("Error")) {
    let type = err.type;
    let message = err.message;

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
      details: err.details.map(
        ({ message, type }: { message: string; type: string }) => ({
          message: "field " + message.replace(/['"]/g, ""),
          type,
        }),
      ),
    };
  }

  return res.status(statusCode).json({
    error: err,
    success: false,
    data: null,
  });
};

module.exports.httpResp = (statusCode: number, data: any, res: Response) => {
  return res.status(statusCode).json({
    error: null,
    success: true,
    data: data,
  });
};

module.exports.unAuthResp = (res: Response) => {
  return res.status(401).json({
    message: "Access Denied",
    data: null,
    error: "User is Unauthorised",
  });
};
