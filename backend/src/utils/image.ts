const path = require("path");
import { Request, Response } from "express";
const { errResp } = require("./http");

module.exports.handleImageRoutes = async (req: Request, res: Response) => {
  try {
    const filePath = path.join(
      __dirname,
      "..",
      "uploads",
      req.params.filename, // + ".avif",
    );

    res.contentType("image/avif");
    res.setHeader("Cross-origin-Embedder-Policy", "require-corp");
    res.setHeader("Cross-origin-Opener-Policy", "cross-origin");
    res.setHeader("Cross-origin-Resource-Policy", "cross-origin");

    res.sendFile(filePath);
  } catch (err) {
    console.log(err);
    return errResp(500, err, res);
  }
};
