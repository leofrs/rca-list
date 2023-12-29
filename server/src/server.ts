import express from "express";
import cors from "cors";
import dotnev from "dotenv";

import { routerHomer } from "./routes/home";

const server = express();
dotnev.config();

server.use(express.json());
server.use(cors());

server.get("/", async (req, res) => {
  res.send("Seja bem vindo a rota /");
});
server.get("/home", routerHomer);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
