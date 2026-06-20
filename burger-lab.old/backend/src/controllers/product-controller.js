// Aqui estamos importando a conexão do Prisma com o banco.
import prisma from "../db.js";

export async function getProducts(req, res) {
  try {
    // Aqui estamos dizendo: Prisma, busque vários produtos na tabela products.
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // Aqui retornamos a lista de produtos em JSON.
    // Se ainda não tiver produto no banco, vai retornar.
    return res.status(200).json(products);
  } catch (error) {
    console.log("Erro ao buscar produtos:");
    console.log(error);

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}

export async function createProduct(req, res) {
  try {
    // Aqui pegamos os dados enviados pelo Postman ou futuramente pelo frontend.
    const { name, description, price, category, img } = req.body;

    // Aqui validamos se todos os campos foram enviados.Se faltar algo, retornamos:
    if (!name || !description || !price || !category || !img) {
      return res.status(400).json({
        message: "Todas as informações são obrigatórias",
      });
    }

    const product = await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: Number(price),
        category: category,
        img: img,
      },
    });

    return res.status(201).json({
      message: "Produto cadastrado com sucesso",
      product: product,
    });
  } catch (error) {
    console.log("Erro ao cadastrar produto:");
    console.log(error);

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    // Aqui pegamos o id que vem pela URL.
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    // Antes de deletar, procuramos se o produto existe.
    if (!product) {
      // Se não existir, retornamos:
      return res.status(404).json({
        message: "Produto não encontrado",
      });
    }

    // Aqui deletamos o produto do banco.
    await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      message: "Produto deletado com sucesso",
    });
  } catch (error) {
    console.log("Erro ao deletar produto:");
    console.log(error);

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}
