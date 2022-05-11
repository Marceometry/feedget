<h1 align="center">
  FeedGet - ReactJS
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>
</p>

<br>

<p align="center">
  <img alt="Project Mockup" src="https://raw.githubusercontent.com/Marceometry/feedget/main/.github/feedget-mockup.png">
</p>

## 💻 Projeto

Para acessar a documentação, <a href="https://feedget.online" target="_blank">clique aqui</a>.

`npm i feedget`

```ts
import { FeedGet } from 'feedget'

const FeedbackWidget = () => {
  const CLIENT_ID = 'YOUR_CLIENT_ID'

  return <FeedGet clientId={CLIENT_ID} />
}
```

Essa lib é um botão flutuante que abre um modal de formulário para enviar um feedback, permitindo tirar uma screenshot. Acesse o <a href="https://feedget.online" target="_blank">dashboard</a> e faça login com seu github para conseguir seu `CLIENT_ID`. O `CLIENT_ID` é usado para identificar sua aplicação e direcionar os feedbacks corretamente. Este projeto foi aprimorado a partir da NLW #8, evento da Rocketseat

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## 💣 Funcionalidades

- Botão flutuante que abre um modal com formulário
- Opção de enviar screenshot junto ao feedback
- Integração com a api em `node` que envia os feedbacks por email para o dono da aplicação

<div>Repositório da api em node: <a href="https://github.com/Marceometry/NLW-FeedGet-NodeJS" target="_blank">https://github.com/Marceometry/NLW-FeedGet-NodeJS</a></div>
<div>Repositório da documentação/dashboard: <a href="https://github.com/Marceometry/NLW-FeedGet-ReactJS" target="_blank">https://github.com/Marceometry/NLW-FeedGet-ReactJS</a></div>

---

<h4 align="center"> Feito com ♥ por Marcelino Teixeira </h4>
