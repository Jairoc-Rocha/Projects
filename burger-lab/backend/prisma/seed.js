import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Lab Smash",
        description:
          "Burger artesanal com cheddar, cebola caramelizada e molho especial da casa.",
        price: 2990,
        category: "Hamburger",
        img: "duplo-da-casa.png",
      },
      {
        name: "Double Lab",
        description:
          "Dois burgers artesanais, queijo duplo, bacon crocante e molho Burger Lab.",
        price: 3790,
        category: "Hamburger",
        img: "calabresa-especial.png",
      },
      {
        name: "Classic Lab",
        description:
          "Burger clássico com queijo, alface, tomate, picles e molho especial.",
        price: 2590,
        category: "Hamburger",
        img: "classico.png",
      },
      {
        name: "Batata Lab",
        description:
          "Batata frita crocante com tempero especial da casa.",
        price: 1490,
        category: "Porção",
        img: "batata-frita.png",
      },
      {
        name: "Nuggets Lab",
        description:
          "Porção crocante de nuggets com molho especial.",
        price: 1890,
        category: "Porção",
        img: "nuggets.png",
      },
      {
        name: "Refrigerante",
        description:
          "Refrigerante gelado para acompanhar seu pedido.",
        price: 700,
        category: "Bebida",
        img: "refrigerante.png",
      },
      {
        name: "Milkshake Lab",
        description:
          "Milkshake cremoso de baunilha com calda especial.",
        price: 1690,
        category: "Bebida",
        img: "milkshake.png",
      },
    ],
  });

  console.log("Produtos cadastrados com sucesso!");
}

main()
  .catch((error) => {
    console.log("Erro ao executar seed:");
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });