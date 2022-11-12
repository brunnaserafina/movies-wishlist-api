import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { UserEntity, NewUser } from "../protocols/User.js";
import * as userRepository from "../repositories/userRepository.js";

async function signUp(req: Request, res: Response) {
  let { username, email, password } = req.body as NewUser;

  try {
    const user: UserEntity | undefined = await userRepository.findUser(email);

    if (user) {
      return res.sendStatus(409);
    }

    const passwordHash: string = bcrypt.hashSync(password, 12);
    password = passwordHash;

    const insertedUser: number = await userRepository.insertUser({
      username,
      email,
      password,
    });

    if (insertedUser === 0) {
      return res.sendStatus(400);
    }

    return res.sendStatus(201);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

export { signUp };
