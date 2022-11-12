import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router } from "./routes/index.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());

server.use(router);

server.get("/status", (req: Request, res: Response): void => {
  res.send("Ok!");
});

server.listen(process.env.PORT, (): void =>
  console.log(`Listening on port ${process.env.PORT}`)
);
