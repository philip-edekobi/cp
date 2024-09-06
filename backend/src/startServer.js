const express = require("express");
const http = require("http");
const helmet = require("helmet");
const cors = require("cors");
const { sequelize, testConn } = require("./database/initDB");
const { setupRoutes } = require("./routes");
// const session = require("express-session");
// const passport = require("passport");
// const startRedis = require("./database/redis");
// const connectRedis = require("connect-redis").default;
const { handleImageRoutes } = require("./utils/image");

// const redisClient = startRedis();
const app = express();
const PORT = process.env.PORT || 53330;

app.use(
  cors({
    origin: /.+/,
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
    await sequelize.sync({ alter: false });

    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log("server is active on port:", PORT);
    });
  } catch (err) {
    throw err;
  }
};
