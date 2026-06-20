// Usamos o Prisma para consultar produto, consultar carrinho, criar item e atualizar quantidade.
import prisma from "../db.js";

// Criamos a função que será chamada pela rota do carrinho.
export async function createCartItem(req, res) {
  try {
    // Pegando o produto enviado.
    const { productId } = req.body;
    // Pegando o usuário logado.
    const userId = req.user.id;

    // Validando se productId foi enviado.
    if (!productId) {
      // Se o frontend não enviar o ID do produto, o backend retorna erro.
      return res.status(400).json({
        message: "ID do produto é obrigatório",
      });
    }

    // Verificando se o produto existe.
    // Aqui buscamos o produto no banco.
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    // Se o ID for inválido, o produto não será encontrado e retorna o erro 404.
    if (!product) {
      return res.status(404).json({
        message: "Produto não encontrado",
      });
    }

    // Verificando se o item já está no carrinho.
    const cartItemAlreadyExists = await prisma.cartItem.findFirst({
      where: {
        userId: userId,
        productId: productId,
      },
    });

    // Se já existir, atualizar quantidade.
    if (cartItemAlreadyExists) {
      const updatedCartItem = await prisma.cartItem.update({
        // Diz qual item do carrinho será atualizado.
        where: {
          id: cartItemAlreadyExists.id,
        },
        // Aumenta a quantidade em 1.
        data: {
          quantity: cartItemAlreadyExists.quantity + 1,
        },
        // Isso faz o Prisma retornar também os dados do produto junto com o item do carrinho.
        include: {
          product: true,
        },
      });

      return res.status(200).json({
        message: "Quantidade do produto atualizada no carrinho",
        cartItem: updatedCartItem,
      });
    }

    // Se não existir, criar item novo.
    const cartItem = await prisma.cartItem.create({
      // Aqui criamos um item no carrinho com quantidade 1.
      data: {
        userId: userId,
        productId: productId,
        quantity: 1,
      },
      include: {
        product: true,
      },
    });

    return res.status(201).json({
      message: "Produto adicionado ao carrinho",
      cartItem: cartItem,
    });
  } catch (error) {
    console.log("Erro ao adicionar produto ao carrinho:");
    console.log(error);

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}

export async function getCartItems(req, res) {
  try {
    // Pegamos o ID do usuário logado.
    const userId = req.user.id;

    // Aqui buscamos todos os itens do carrinho somente daquele usuário logado.
    const cartItems = await prisma.cartItem.findMany({
      where: {
        userId: userId,
      },
      // Traz os dados completos do produto junto com o item do carrinho.
      include: {
        product: true,
      },
      // Ordena os itens.
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json(cartItems);
  } catch (error) {
    console.log("Erro ao buscar itens do carrinho:");
    console.log(error);

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}

export async function decreaseCartItem(req, res) {
  try {
    // Pegando o ID da URL.
    const { id } = req.params;
    // Pegando o usuário logado pelo ID.
    const userId = req.user.id;

    // Buscar o item no banco.
    const cartItem = await prisma.cartItem.findUnique({
      where: {
        id: id,
      },
    });

    // Se o item não existir.
    if (!cartItem) {
      return res.status(404).json({
        message: "Item do carrinho não encontrado",
      });
    }

    // Verificar se o item pertence ao usuário.
    if (cartItem.userId !== userId) {
      return res.status(403).json({
        message: "Você não tem permissão para alterar este item",
      });
    }

    // Se a quantidade for 1 ou menor, remover
    if (cartItem.quantity <= 1) {
      await prisma.cartItem.delete({
        where: {
          id: id,
        },
      });

      return res.status(200).json({
        message: "Item removido do carrinho",
      });
    }

    // Se a quantidade for maior que 1, diminuir.
    const updatedCartItem = await prisma.cartItem.update({
      where: {
        id: id,
      },
      data: {
        quantity: cartItem.quantity - 1,
      },
      include: {
        product: true,
      },
    });

    return res.status(200).json({
      message: "Quantidade do produto diminuída",
      cartItem: updatedCartItem,
    });
  } catch (error) {
    console.log("Erro ao diminuir item do carrinho:");
    console.log(error);

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}

export async function deleteCartItem(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const cartItem = await prisma.cartItem.findUnique({
      where: {
        id: id,
      },
    });

    if (!cartItem) {
      return res.status(404).json({
        message: "Item do carrinho não encontrado",
      });
    }

    if (cartItem.userId !== userId) {
      return res.status(403).json({
        message: "Você não tem permissão para remover este item",
      });
    }

    await prisma.cartItem.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      message: "Item removido do carrinho",
    });
  } catch (error) {
    console.log("Erro ao remover item do carrinho:");
    console.log(error);

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}