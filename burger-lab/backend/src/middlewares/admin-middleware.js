// Aqui criamos e exportamos a função chamada adminMiddleware.
export function adminMiddleware(req, res, next) {
// Aqui verificamos se existe usuário dentro da requisição.
  if (!req.user) {
    // Se não tiver req.user, significa que o usuário não passou pelo middleware de autenticação
    return res.status(401).json({
      message: "Usuário não autenticado",
    });
  }

// Aqui verificamos se o usuário não é admin.
  if (!req.user.admin) {
// Se o usuário está logado, mas não é admin, retornamos 403.
    return res.status(403).json({
      message:
        "Acesso negado. Apenas administradores podem executar esta ação.",
    });
  }

// Se passou por todas as verificações, significa que o usuário é admin.
// Então liberamos a próxima função.
  next();
}
