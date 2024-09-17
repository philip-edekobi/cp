import jwt, { JwtPayload } from "jsonwebtoken";

const secret = process.env.SECRET || "";

export function generateToken(payload: any): string {
  try {
    const token = jwt.sign(payload, secret, {
      expiresIn: "2h",
    });

    return token;
  } catch (err) {
    throw err;
  }
}

export function verifyToken(token: string): string | JwtPayload {
  try {
    const payload = jwt.verify(token, secret);

    return payload;
  } catch (err) {
    throw err;
  }
}
