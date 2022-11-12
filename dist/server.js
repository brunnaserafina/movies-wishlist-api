import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes/index.js";
dotenv.config();
var server = express();
server.use(express.json());
server.use(cors());
server.use(router);
server.get("/status", function (req, res) {
    res.send("Ok!");
});
server.listen(process.env.PORT, function () {
    return console.log("Listening on port ".concat(process.env.PORT));
});
