import { connection } from "../databases/db.js";

import { NewMovie, Movie } from "../protocols/Movie.js";

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

async function getMoviesToWishList(user_id: number): Promise<Movie[]> {
  return (
    await connection.query(
      `
      SELECT 
          movies.name AS movie, 
          genres.name AS genre, 
          streamings.name AS streaming, 
          status.name AS status
      FROM movies
      JOIN genres
          ON movies.genre_id = genres.id
      JOIN streamings
          ON movies.streaming_id = streamings.id
      JOIN status
          ON movies.status_id = status.id
      WHERE movies.user_id=$1
      GROUP BY movies.name, genres.name, streamings.name, status.name;
      `,
      [user_id]
    )
  )?.rows;
}

export { addMovieToWishlist, getMoviesToWishList };
