import { connection } from "../databases/db.js";

import { NewSession } from "../protocols/Session.js";

async function insertSession({ user_id, token }: NewSession): Promise<number> {
  return (
    await connection.query(
      `INSERT INTO sessions (user_id, token) VALUES ($1,$2);`,
      [user_id, token]
    )
  ).rowCount;
}

async function findSession(token: string): Promise<NewSession> {
  return (
    await connection.query(`SELECT * FROM sessions WHERE token=$1;`, [token])
  )?.rows[0];
}

export { insertSession, findSession };
