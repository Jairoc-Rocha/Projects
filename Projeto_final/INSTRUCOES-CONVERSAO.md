# Projeto convertido para JavaScript + CSS

Conversão realizada:

- Frontend convertido de React com TypeScript para React com JavaScript.
- Tailwind CSS removido do frontend.
- Estilos convertidos para CSS comum.
- Backend convertido de TypeScript para JavaScript.
- Node.js, Express, PostgreSQL, Prisma e estrutura geral foram mantidos.

## Como rodar o frontend

```bash
cd front-end
npm install
npm run dev
```

## Como rodar o backend

Crie o arquivo `.env` dentro da pasta `back-end` com as variáveis necessárias, por exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
JWT_SECRET="sua_chave_secreta"
```

Depois execute:

```bash
cd back-end
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Observação: o comando `npm run prisma:generate` precisa baixar binários do Prisma na primeira execução. Neste ambiente eu não consegui executar esse comando porque não há acesso externo ao domínio de binários do Prisma, mas deixei o script configurado no `package.json`.
