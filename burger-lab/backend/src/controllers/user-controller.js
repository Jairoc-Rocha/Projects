import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Aqui estamos importando a conexão com o banco.
import prisma from "../db.js";

export async function createUser(req, res) {
  try {
    // Pegando os dados do corpo da requisição
    const { name, email, password, cep } = req.body;

    // Validando campos obrigatórios
    if (!name || !email || !password || !cep) {
      return res.status(400).json({
        message: "Todas as informações são obrigatórias",
      });
    }

    // Verificando se o e-mail já existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // Retornando erro se e-mail já existir
    if (userAlreadyExists) {
      return res.status(409).json({
        message: "E-mail já cadastrado",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Criando o usuário no banco de dados.
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        cep: cep,
      },
    });

    // Retornando sucesso
    return res.status(201).json({
      message: "Usuário cadastrado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        cep: user.cep,
        admin: user.admin,
      },
    });
    // Tratando erro interno
  } catch (error) {
    console.log("ocorreu um erro: ", error);

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}

export async function loginUser(req, res) {
  try {
    // Esta parte pega os dados enviados pelo Postman ou futuramente pelo React.
    const { email, password } = req.body;

    // Esta validação verifica se os dois campos foram enviados.
    if (!email || !password) {
      return res.status(400).json({
        message: "E-mail e senha são obrigatórios",
      });
    }

    // Depois buscamos o usuário pelo e-mail.
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // Se não encontrar o usuário.
    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado",
      });
    }

    // O bcrypt.compare() verifica se a senha digitada corresponde ao hash salvo no banco de dados.
    const passwordIsValid = await bcrypt.compare(password, user.password);

    // Se a senha estiver errada.
    if (!passwordIsValid) {
      return res.status(401).json({
        message: "Credenciais inválidas",
      });
    }

    // Esta parte cria o token.
    const token = jwt.sign(
      {
        // Isso é o conteúdo que será guardado dentro do token. É chamado de payload.
        id: user.id,
        email: user.email,
        admin: user.admin,
      },
      //   Essa é a chave secreta que está no .env. Ela serve para assinar o token.
      // Se alguém tentar falsificar o token, o backend vai perceber porque a assinatura não bate.
      process.env.JWT_SECRET,
      {
        // Aqui dizemos que o token vai expirar em 7 dias.
        // Depois de 7 dias, o usuário precisaria fazer login novamente.
        expiresIn: "7d",
      },
    );

    // Esta parte salva o token em cookie:
    res.cookie("token", token, {
      // O JavaScript do frontend não consegue acessar esse cookie diretamente. Isso ajuda na segurança.
      httpOnly: true,
      // É uma configuração de segurança do cookie. Para ambiente local e projeto de estudo, lax funciona bem.
      sameSite: "lax",
      // Isso define quanto tempo o cookie vai durar.
      // 7 dias x 24 horas x 60 minutos x 60 segundos x 1000 milissegundos = 7 dias em milissegundos.
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Se estiver correta, retornamos o usuário sem a senha.
    return res.status(200).json({
      message: "Login realizado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        cep: user.cep,
        admin: user.admin,
      },
    });
  } catch (error) {
    console.log("Erro ao fazer login: ");
    console.log(error);

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}

// Criando a função getMe - Ela vai responder os dados do usuário logado
export async function getMe(req, res) {
  // req.user foi criado no middleware:
  // Então a função getMe só devolve esses dados.
  return res.status(200).json(req.user);
}

// Criando a função para deslogar
export async function logoutUser(req, res) {
  // Aqui apagamos o cookie chamado token.
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
  });

  return res.status(200).json({
    message: "Logout realizado com sucesso",
  });
}
