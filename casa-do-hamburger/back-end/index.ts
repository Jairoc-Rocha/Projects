import express from "express";
import { connection } from "./src/db.js";

const app = express();
connection();

app.get("/", (req, res) => {
  res.json("Você acessou a rota inicial");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
