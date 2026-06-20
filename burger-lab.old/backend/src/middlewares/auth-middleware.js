// Aqui importamos a biblioteca que consegue verificar se o token é verdadeiro.
import jwt from "jsonwebtoken";

// Aqui importamos a conexão com o banco
import prisma from "../db.js";

// Criando a função. Essa função será exportada para ser usada nas rotas.
// O middleware vai usar o Prisma para buscar o usuário pelo ID que está dentro do token.
export async function authMiddleware(req, res, next) {
  try {
    // Lendo o cookie - Essa linha tenta pegar o cookie chamado token.
    const token = req.cookies.token;

    // Verificando se o token existe
    // Se o usuário não tiver token, ele não está logado.
    if (!token) {
      return res.status(401).json({
        message: "Token não informado",
      });
    }

    // Verificando o JWT - Aqui o backend verifica se o token é válido.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Buscando o usuário no banco
    // Agora buscamos o usuário no banco usando o ID que veio do token.
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    // Se o usuário não existir
    // Isso pode acontecer se o usuário foi apagado do banco, mas ainda tem um cookie antigo no navegador.
    if (!user) {
      return res.status(401).json({
        message: "Usuário não encontrado",
      });
    }

    // Salvando o usuário dentro da requisição
    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      cep: user.cep,
      admin: user.admin,
    };

    // Liberando a rota
    // O next() significa:Pode continuar para a próxima função da rota.
    next();

    // Tratando token inválido
  } catch (error) {
    console.log("Erro no middeware de autenticação:");
    console.log(error);

    return res.status(401).json({
      message: "Token invádio ou expirado",
    });
  }
}
