import { connection } from "../databases/db.js";

async function deleteMovie(id: number): Promise<number> {
  return (await connection.query(`DELETE FROM movies WHERE id=$1;`, [id]))
    .rowCount;
}

export { deleteMovie };
