export function listProducts(request, response) {
  return response.json({
    message: "Lista de produtos será carregada do banco de dados com Prisma.",
  });
}

export function getProductById(request, response) {
  return response.json({
    message:
      "Busca de produto por ID será carregada do banco de dados com Prisma.",
  });
}
