<p>
  <img src="/public/preview.png" width="100%" />
</p>

# 📝 Book Wise 📝

BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas o design do Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js. Nela o usuário poderá criar a sua avaliação para os livros disponíveis.

A aplicação possuí um Banco de Dados próprio em MySQL, com uma lista de livros pré-cadastrada. Para criar avaliações, o usuário deve fazer Login, sendo possível realizar ele com o Google ou com o GitHub. No primeiro Login, o usuário será cadastrado automaticamente no Banco. Nos demais logins, as infos do usuário já serão carregadas diretamente deste Banco.

O projeto foi criado utilizando o Next.js, e seu foco é na renderização pelo lado do servidor (SSR), aumentando a performance com um carregamento da página de forma mais eficiente.

## ⚙ Clonando Projeto

Passo a passo para clonar e executar a aplicação na sua máquina:

```bash
# Clone este repositório
$ git clone git@github.com:Victtor-777/Book_Wise.git

# Acesse a pasta do projeto no terminal
$ cd book-wise

# Instale as dependências
$ npm install

# Crie uma arquivo .env e preencha conforme apresentado no arquivo .env.example

# Executar seu banco de dados

# Executar o seguinte comando para criar as migrations no banco
$ npx prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação inciará em alguma porta disponível que poderá ser acessada pelo navegador
```

## 🚀 Tecnologias

As seguintes principais ferramentas foram usadas na construção do projeto:

- **[TypeScript](https://www.typescriptlang.org/)**
- **[Next.js](https://nextjs.org/)**
- **[Stitches](https://stitches.dev/)**
- **[RadixUI](https://www.radix-ui.com/)**
- **[Prisma](https://www.prisma.io/)**
- **[Zod](https://zod.dev/)**
- **[Phosphor-Icons](https://phosphoricons.com/)**
- **[@tanstack/react-query](https://tanstack.com/query/latest)**
- **[Axios](https://axios-http.com/ptbr/docs/intro)**
- **[Next-Auth](https://next-auth.js.org/)**
- **[Next-SEO](https://github.com/garmeeh/next-seo)**
- **[@uidotdev/usehooks](https://usehooks.com/)**

## 📝 Considerações

Projeto extremamente completo e com muito aprendizado, deu bastante trabalho para completar esse desafio, mas ao final pude aprender muita coisa e reforçar com a prática vários conceitos do Next.js.
