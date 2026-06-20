// Importa o Prisma Client gerado pelo Prisma.
import { PrismaClient } from "@prisma/client";

// Importa o adapter do PostgreSQL
import { PrismaPg } from "@prisma/adapter-pg";

// Cria uma conexão/adaptador para PostgreSQL
const adapter = new PrismaPg({
  // Usa a URL do banco que está no .env.
  connectionString: process.env.DATABASE_URL,
});

// Cria o Prisma Client.
const prisma = new PrismaClient({
  // Diz para o Prisma usar o adapter PostgreSQL.
  adapter,
});

// Exporta o prisma para usar em outros arquivos.
export default prisma;
