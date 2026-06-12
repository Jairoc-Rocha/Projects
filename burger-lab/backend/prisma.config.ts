// O schema está em prisma/schema.prisma.
// As migrations ficarão em prisma/migrations.
// A URL do banco está no .env em DATABASE_URL.

import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // Diz onde está o arquivo schema.prisma.
  schema: "prisma/schema.prisma",
  migrations: {
    // Diz onde ficarão as migrations.
    path: "prisma/migrations",
  },
  datasource: {
    // Diz que a URL do PostgreSQL virá do .env, pela variável DATABASE_URL.
    url: process.env["DATABASE_URL"],
  },
});
