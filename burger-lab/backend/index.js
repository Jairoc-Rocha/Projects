// O Express é a biblioteca que é utilizada para criar APIs.
import express from "express";
// Importando a biblioteca cors.
import cors from "cors";
// Importando a biblioteca cookie-parser que lê cookies
import cookieParser from "cookie-parser";
// Importando o arquivo de rotas que foi criado.
import routes from "./src/router.js";

// Aqui é criada a aplicação Express, como se fosse o nosso servidor.
const app = express();

// Configurando o CORS.
app.use(
  cors({
    // Backend, aceite requisições vindas do frontend em http://localhost:5173
    origin: "http://localhost:5173",
    // permite trabalhar com cookies. Isso será importante para o login com JWT.
    credentials: true,
  }),
);

// Configurando o cookie-parser. 
app.use(cookieParser());
// Essa linha permite que o backend receba dados em formato JSON.
app.use(express.json());

// Aqui o express, use todas as rotas que estão no arquivo routes.js.
app.use(routes);

// Primeiro tente pegar o valor da porta no arquivo .env, Se não encontrar, use a porta 3000.
const PORT = process.env.PORT || 3000;

// Aqui o servidor começa a escutar na porta 3000.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
