export type MovieEntity = {
  id: number;
  name: string;
  genre_id: number;
  streaming_id: number;
  status_id: number;
  user_id: number;
};

export type NewMovie = Omit<MovieEntity, "id">;

export type Movie = Omit<NewMovie, "user_id">;


