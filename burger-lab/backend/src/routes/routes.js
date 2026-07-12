import { Router } from "express";

import { register } from "../controllers/AuthController.js";

import {
  listProducts,
  getProductById,
} from "../controllers/ProductController.js";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({
    message: "API Burger Lab funcionando!",
  });
});

// Rotas de autenticação
routes.post("/auth/register", register);

// Rotas de produtos
routes.get("/products", listProducts);
routes.get("/products/:id", getProductById);

export default routes;
