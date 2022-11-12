import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import { UserEntity, NewUser, User } from "../protocols/User.js";
import * as userRepository from "../repositories/userRepository.js";
import * as sessionRepository from "../repositories/sessionRepository.js";

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

async function signIn(req: Request, res: Response) {
  const { email, password } = req.body as User;
  let validPassword: boolean;

  try {
    const user: UserEntity | undefined = await userRepository.findUser(email);

    if (user) {
      validPassword = bcrypt.compareSync(password, user.password);
    }

    if (!user || !validPassword) {
      return res.status(401).send({ message: "E-mail ou senha incorretos!" });
    }

    const token: string = uuid();
    const user_id: number = user.id;

    const insertedSession: number = await sessionRepository.insertSession({
      user_id,
      token,
    });

    if (insertedSession === 0) {
      return res.sendStatus(400);
    }

    return res.status(200).send({ token: token });
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

export { signUp, signIn };
