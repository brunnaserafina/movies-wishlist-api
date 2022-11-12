import { Request, Response } from "express";

import * as movieRepository from "../repositories/movieRepository.js";

async function deleteMovie(req: Request, res: Response) {
  const id: number = Number(req.params.id);

  try {
    const deletedMovie: number = await movieRepository.deleteMovie(id);

    if (deletedMovie === 0) {
      return res
        .status(400)
        .send({ message: "Não foi possível excluir o filme!" });
    }

    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

export { deleteMovie };
