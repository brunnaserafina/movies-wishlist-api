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

async function numberOfMoviesByGenre(
  user_id: number,
  genre_id: number
): Promise<number> {
  return (
    await connection.query(
      `
    SELECT COUNT(genre_id)
      FROM movies
    WHERE user_id=$1 AND genre_id=$2;
  `,
      [user_id, genre_id]
    )
  )?.rows[0];
}

export { deleteMovie, updateStatusMovie, numberOfMoviesByGenre };
