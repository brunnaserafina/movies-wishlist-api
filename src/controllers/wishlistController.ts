import { Request, Response } from "express";

import { Movie } from "../protocols/Movie.js";
import * as wishlistRepository from "../repositories/wishlistRepository.js";

async function insertWishList(req: Request, res: Response) {
  const { name, genre_id, streaming_id, status_id } = req.body as Movie;
  const user_id: number = Number(res.locals.idUser);

  try {
    const insertedMovie: number = await wishlistRepository.addMovieToWishlist({
      name,
      genre_id,
      streaming_id,
      status_id,
      user_id,
    });

    if (insertedMovie === 0) {
      return res
        .status(400)
        .send({ message: "Não foi possível inserir os dados!" });
    }

    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

export { insertWishList };
