import { connection } from "../databases/db.js";
import { UserEntity, NewUser } from "../protocols/User.js";

async function findUser(email: string): Promise<UserEntity> {
  return (
    await connection.query(
      `SELECT id, username, email, password FROM users WHERE email=$1;`, [email]
    )
  )?.rows[0];
}

async function insertUser({
  username,
  email,
  password,
}: NewUser): Promise<number> {
  return (
    await connection.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`,
      [username, email, password]
    )
  ).rowCount;
}

export { findUser, insertUser };
