import { request } from "../utils/itens-api";
import express from "express";

export const routerHomer = express.Router();

routerHomer.get("/home", async (req, res) => {
  try {
    const response = await request();
    res.send(response);
  } catch (error) {
    console.error(`Erro ao acessar a API: ${error}`);
    res.status(500).send("Erro ao acessar a API");
  }
});
