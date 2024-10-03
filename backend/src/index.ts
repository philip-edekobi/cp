import { AdminDto, MemberDto, ParishAdminDto } from "./dtos/user";

const { startServer } = require("./startServer");

declare module "express-serve-static-core" {
  interface Request {
    user?: AdminDto | ParishAdminDto | MemberDto;
  }
}

try {
  (async () => {
    await startServer();
  })();
} catch (err) {
  console.error(err);
  process.exit(1);
}
