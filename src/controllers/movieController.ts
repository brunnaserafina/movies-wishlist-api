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

async function updateStatusMovie(req: Request, res: Response) {
  const id: number = Number(req.params.id);

  try {
    const editedStatusMovie: number = await movieRepository.updateStatusMovie(
      id
    );

    if (editedStatusMovie === 0) {
      return res
        .status(400)
        .send({ message: "Não foi possível editar o status!" });
    }

    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

async function numberOfMoviesByGenre(req: Request, res: Response) {
  const user_id: number = Number(res.locals.idUser);
  const genre_id: number = Number(req.params.id);

  try {
    const filteredNumberOfMoviesByGenre: number =
      await movieRepository.numberOfMoviesByGenre(user_id, genre_id);

    if (!filteredNumberOfMoviesByGenre) {
      return res
        .status(400)
        .send({ message: "Não foi possível filtrar a busca!" });
    }

    return res.status(200).send(filteredNumberOfMoviesByGenre);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

export { deleteMovie, updateStatusMovie, numberOfMoviesByGenre };
