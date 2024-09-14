const { startServer } = require("./startServer.ts");

try {
  (async () => await startServer())();
} catch (err) {
  console.error(err);
  process.exit(1);
}
