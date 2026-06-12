// O Router do express serve para organizar as rotas em um arquivo separado.
import { Router } from "express";

import prisma from "./db.js";
import { createUser, loginUser } from "./controllers/user-controller.js";

// Aqui criamos um agrupador de rotas, como uma “lista de caminhos” da API.
const routes = Router();

// Essa é a rota principal, http://localhost:3000/
routes.get("/", (req, res) => {
  res.send("API Burger Lab funcioando!");
});

// Essa rota é uma rota de teste de saúde da API, http://localhost:3000/health
routes.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor funcionando corretamente",
  });
});

routes.get("/users-test", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    return res.json(users);
  } catch (error) {
    console.log("Ocorreu um erro: " + error);

    return res.status(500).json({
      message: "Erro ao buscar usuários",
    });
  }
});

routes.post("/register", createUser);
routes.post("/login", loginUser);

// Aqui estamos exportando as rotas para usar no index.js.
export default routes;
