import { isValidEmail } from "../utils/isValidEmail.js";
import { normalizeEmail } from "../utils/normalizeEmail.js";

export function register(request, response) {
  const { name, email, password } = request.body;

  const normalizedName = name?.trim();
  const normalizedEmail = email ? normalizeEmail(email) : "";

  if (!normalizedName) {
    return response.status(400).json({
      message: "O nome é obrigatório.",
    });
  }

  if (!normalizedEmail) {
    return response.status(400).json({
      message: "O e-mail é obrigatório.",
    });
  }

  if (!isValidEmail(normalizedEmail)) {
    return response.status(400).json({
      message: "Digite um e-mail válido.",
    });
  }

  if (!password?.trim()) {
    return response.status(400).json({
      message: "A senha é obrigatória.",
    });
  }

  if (password.length < 6) {
    return response.status(400).json({
      message: "A senha precisa ter no mínimo 6 caracteres.",
    });
  }

  return response.status(201).json({
    message:
      "Cadastro validado. Na próxima etapa vamos salvar no banco de dados.",
    user: {
      name: normalizedName,
      email: normalizedEmail,
    },
  });
}
