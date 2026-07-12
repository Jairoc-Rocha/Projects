import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export async function connection() {
  try {
    await prisma.$connect();
    console.log("Conectado ao BD.");
  } catch (error) {
    console.log("Erro ao conectar-se com o banco de dados");
    console.log(error);
  }
}

export { prisma };
