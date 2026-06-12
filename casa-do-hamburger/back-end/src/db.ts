import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// Forma antiga de usar o PrismaClient, versão 6.9 para trás. Algumas aulas estão assim
// const prisma = new PrismaClient( );

export { prisma };

export async function connection() {
  try {
    await prisma.$connect();
    console.log("Conectado com o DB");
  } catch (error) {
    console.log(error);
  }
}
