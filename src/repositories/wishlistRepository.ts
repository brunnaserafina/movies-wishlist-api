import { connection } from "../databases/db.js";

import { NewMovie } from "../protocols/Movie.js";

async function addMovieToWishlist({
  name,
  genre_id,
  streaming_id,
  status_id,
  user_id,
}: NewMovie): Promise<number> {
  return (
    await connection.query(
      `INSERT INTO movies (name, genre_id, streaming_id, status_id, user_id) VALUES ($1,$2,$3,$4,$5);`,
      [name, genre_id, streaming_id, status_id, user_id]
    )
  ).rowCount;
}

export { addMovieToWishlist };
