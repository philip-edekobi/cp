import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    return passwordHash;
  } catch (err) {
    throw err;
  }
}

export async function comparePasswordWithHash(
  password: string,
  pHash: string,
): Promise<boolean> {
  try {
    const matched = await bcrypt.compare(password, pHash);

    return matched;
  } catch (e) {
    throw e;
  }
}

export function generatePassword(length: number): string {
  const randomPassword = Math.random()
    .toString()
    .substring(2, length + 2);

  return randomPassword;
}
