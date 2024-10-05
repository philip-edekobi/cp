import express from "express";
import http from "http";
import helmet from "helmet";
import cors from "cors";
import { sequelize, testConn } from "./database/initDB";
import { setupRoutes } from "./routes";
// const session = require("express-session");
// const passport = require("passport");
// const startRedis = require("./database/redis");
// const connectRedis = require("connect-redis").default;
const { handleImageRoutes } = require("./utils/image");

// const redisClient = startRedis();
const app = express();
const PORT = process.env.PORT || 53330;

app.options("*", cors());
app.use(
  cors({
    // origin: "*",
    // origin: [
    //   "http://localhost:5173",
    //   "localhost:5173",
    //   "https://chapelmate.com",
    // ],
    origin: /^.*$/,
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    // credentials: true,
  }),
);
app.use(helmet());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// serve images
app.get("/images/:filename", handleImageRoutes);

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "jakdflajsflks",
//     resave: false,
//     saveUninitialized: false,
//     store: new connectRedis({ client: redisClient }),
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24,
//       secure: process.env.NODE_ENV === "production",
//     },
//     name: "Session",
//   }),
// );

// app.use(passport.initialize());
// app.use(passport.session());
setupRoutes(app);

module.exports.app = app;

module.exports.startServer = async function () {
  try {
    await testConn();

    if (process.env.NODE_ENV && process.env.NODE_ENV !== "production") {
      await sequelize.sync({ alter: true });
    }

    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log("server is active on port:", PORT);
    });
  } catch (err) {
    throw err;
  }
};
