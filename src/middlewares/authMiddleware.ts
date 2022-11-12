import { Request, Response, NextFunction } from "express";

import { findSession } from "../repositories/sessionRepository.js";
import { NewSession } from "../protocols/Session.js";

async function tokenValidate(req: Request, res: Response, next: NextFunction) {
  const token: string | undefined = req.headers.authorization?.replace(
    "Bearer ",
    ""
  );
  let session: NewSession | undefined;
  let idUser: number;

  try {
    if (token) {
      session = await findSession(token);
    }

    if (!token || !session) {
      return res.sendStatus(401);
    }

    idUser = session.user_id;

    res.locals = { idUser };

    return next();
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

export { tokenValidate };
