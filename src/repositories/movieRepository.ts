import { connection } from "../databases/db.js";
import { QueryResult } from "pg";

async function deleteMovie(id: number): Promise<number> {
  return (await connection.query(`DELETE FROM movies WHERE id=$1;`, [id]))
    .rowCount;
}

async function updateStatusMovie(id: number): Promise<number> {
  return (
    await connection.query(`UPDATE movies SET status_id=2 WHERE id=$1;`, [id])
  ).rowCount;
}

export { deleteMovie, updateStatusMovie };
