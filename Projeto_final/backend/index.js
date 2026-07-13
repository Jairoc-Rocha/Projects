import express from "express";
import { connection } from "./src/db.js";
import cors from "cors";
import { router } from "./src/routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(router);

connection();

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
