import { connection } from "../databases/db.js";

import { UserEntity, NewUser } from "../protocols/User.js";
import { NewSession } from "../protocols/Session.js";

async function findUser(email: string): Promise<UserEntity> {
  return (
    await connection.query(
      `SELECT id, username, email, password FROM users WHERE email=$1;`,
      [email]
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

async function insertSession({ user_id, token }: NewSession): Promise<number> {
  return (
    await connection.query(
      `INSERT INTO sessions (user_id, token) VALUES ($1,$2);`,
      [user_id, token]
    )
  ).rowCount;
}

export { findUser, insertUser, insertSession };
