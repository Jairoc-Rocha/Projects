// O Router do express serve para organizar as rotas em um arquivo separado.
import { Router } from "express";

import prisma from "./db.js";
import {
  createUser,
  loginUser,
  getMe,
  logoutUser,
} from "./controllers/user-controller.js";
import { authMiddleware } from "./middlewares/auth-middleware.js";
import { adminMiddleware } from "./middlewares/admin-middleware.js";
import {
  getProducts,
  createProduct,
  deleteProduct,
} from "./controllers/product-controller.js";
import {
  createCartItem,
  getCartItems,
  decreaseCartItem,
  deleteCartItem,
} from "./controllers/cart-controller.js";

// Aqui criamos um agrupador de rotas, como uma “lista de caminhos” da API.
const routes = Router();

// Essa é a rota principal, http://localhost:3000/
routes.get("/", (req, res) => {
  res.send("API Burger Lab funcionando!");
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

// Rotas de usuário.
routes.post("/register", createUser);
routes.post("/login", loginUser);
routes.get("/me", authMiddleware, getMe);
routes.post("/logout", authMiddleware, logoutUser);

// Rotas de produtos.
routes.get("/get-products", getProducts);
routes.post("/create-product", authMiddleware, adminMiddleware, createProduct);
routes.delete(
  "/delete-product/:id",
  authMiddleware,
  adminMiddleware,
  deleteProduct,
);

// Rotas de carrinho.
routes.post("/create-cart-item", authMiddleware, createCartItem);
routes.get("/get-cart-items", authMiddleware, getCartItems);
routes.patch("/decrease-cart-item/:id", authMiddleware, decreaseCartItem);
routes.delete("/delete-cart-item/:id", authMiddleware, deleteCartItem);

// Aqui estamos exportando as rotas para usar no index.js.
export default routes;
