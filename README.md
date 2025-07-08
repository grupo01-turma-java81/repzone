# 🏋️ RepZone

Sistema de controle de treinos e exercícios, desenvolvido em React com TypeScript como parte do Projeto Integrador 2025 da Generation Brasil.
</br>

O **RepZone** foi criado com o objetivo de registrar treinos personalizados e exercícios com informações como nome, descrição, grupo muscular, dia da semana e vínculo ao treino. O sistema possui funcionalidades completas de **CRUD (Create, Read, Update, Delete)** tanto para treinos quanto para exercícios.

## 📷 Demonstração

> Imagens da aplicação

| Página Inicial                     | Página de Exercícios                  | Página de Treinos                    |
|------------------------------------|----------------------------------------|--------------------------------------|
| ![Home](https://i.postimg.cc/1zj3BXWd/repzone.png) | ![Exercícios](https://i.postimg.cc/mkNB3bpz/repzone-exerc.png) | ![Treinos](https://i.postimg.cc/MHGWzkKh/repzone-treino.png) |

## ✨ Funcionalidades

✔️ Cadastro de exercícios  
✔️ Edição e exclusão de exercícios  
✔️ Visualização dos treinos com listagem de exercícios fictícios  
✔️ Criação, edição e remoção de treinos  
✔️ Interface responsiva com design escuro  
✔️ Navegação entre páginas via React Router  
✔️ Estrutura tipada com TypeScript

### 🔗 Sobre o Backend
> 🚧 **Observação:** A integração com backend da aplicação **RepZone** ainda está em fase de desenvolvimento. </br>
> 📂 Para acompanhar o progresso, visualizar o código-fonte ou contribuir com o desenvolvimento, acesse o repositório clicando neste [link](https://github.com/grupo01-turma-java81/repzone-backend).

## 🧠 Componentes e Relacionamentos
🔸 **CardTreinos**

Representa um card individual de um treino, com funcionalidades de seleção, edição de nome e exclusão.
| Propriedade           | Tipo    | Descrição                           |
| --------------------- | ------- | ----------------------------------- |
| `nome`                | string  | Nome do treino                      |
| `selecionado`         | boolean | Define se o treino está selecionado |
| `onEditNome`          | função  | Edita o nome do treino              |
| `onToggleSelecionado` | função  | Alterna a seleção do treino         |
| `onDelete`            | função  | Remove o treino                     |

📌 **Relacionamento:** O componente `ListaTreinos` contém múltiplos `CardTreinos` (1:N).

---

🔹 **CardExercicios**

Representa um exercício físico dentro de um treino, com suporte à edição e exclusão.
| Propriedade | Tipo   | Descrição                   |
| ----------- | ------ | --------------------------- |
| `nome`      | string | Nome do exercício           |
| `descricao` | string | Descrição geral             |
| `regiao`    | string | Região muscular trabalhada  |
| `dia`       | string | Dia da semana para execução |
| `treino`    | string | Treino associado            |
| `onEdit`    | função | Edita os dados do exercício |
| `onDelete`  | função | Exclui o exercício          |

📌 **Relacionamento**: `ListaExercicios` renderiza vários `CardExercicios` (1:N).

## 🗂️ Estrutura do Projeto

```shell
├── components/
│   ├── exercicios/
│   │   ├── cardexercicios/        # Card individual de exercício        
│   │   └── listaexercicios/       # Lista de exercícios
│   ├── layout/                    # Wrapper principal
│   ├── Footer.tsx                 # Rodapé do sistema
│   ├── Navbar.tsx                 # Barra de navegação
│   └── treinos/
│       ├── cardtreinos/           # Card individual de treino
│       └── listatreinos/          # Lista de treinos
│
├── pages/
│   ├── exercicios/                # Página Exercícios
│   ├── home/                      # Página Home
│   ├── sobrenos/                  # Página Sobre Nós
│   └── treinos/                   # Página Treinos
│
├── App.tsx                        # Definição das rotas com React Router
└── main.tsx                       # Ponto de entrada da aplicação

```

## 🔗 Rotas da Aplicação

| Caminho       | Componente   | Descrição                                       |
| ------------- | ------------ | ----------------------------------------------- |
| `/`           | `Home`       | Página inicial com últimos treinos e exercícios |
| `/treino`     | `Treino`     | Página de criação e listagem de treinos         |
| `/exercicios` | `Exercicios` | Página para gerenciar exercícios                |
| `/sobrenos`   | `SobreNos`   | Informações sobre os desenvolvedores            |

## 🚀 Tecnologias e ferramentas

- [React](https://reactjs.org/): Biblioteca para criação de interfaces de usuário.
- [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript com tipagem estática.
- [Vite](https://vitejs.dev/): Ferramenta de build rápida e moderna.
- [Tailwind CSS](https://tailwindcss.com/): Framework de classes utilitárias para estilização.
- [Lucide Icons](https://lucide.dev/): Roteamento de páginas no React.
- [React Router DOM](https://reactrouter.com/): Biblioteca de ícones modernos.
- [Phosphor Icons](https://phosphoricons.com/): Ícones personalizados e responsivos.

## 🖥️ Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/grupo01-turma-java81/repzone.git

# Acesse a pasta do projeto
cd repzone

# Instale as dependências
yarn

# Inicie o servidor
yarn dev
```

Abra no navegador: `http://localhost:5173`

## 🤝 Contribuição
Contribuições são sempre bem-vindas! Você pode colaborar com sugestões, feedbacks ou melhorias no código. Sinta-se à vontade para abrir issues ou enviar pull requests.

> 💙 Este projeto foi desenvolvido de forma colaborativa por um grupo comprometido com o aprendizado e a prática de desenvolvimento.

👤 **Colaboradores do Projeto**
<table> <tr> <td align="center"> <a href="https://github.com/ViniCristhian"> <img src="https://github.com/ViniCristhian.png" width="100px;" alt="Vinícius Cristhian"/> <br /> <sub><b>Vinícius Cristhian</b></sub> </a><br /> <a href="https://www.linkedin.com/in/vinicristhian/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/IagoWiliian"> <img src="https://github.com/IagoWiliian.png" width="100px;" alt="Iago Willian"/> <br /> <sub><b>Iago Willian</b></sub> </a><br /> <a href="https://www.linkedin.com/in/iago-willian-/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/GiulioArantes"> <img src="https://github.com/GiulioArantes.png" width="100px;" alt="Giulio Gabriel"/> <br /> <sub><b>Giulio Gabriel</b></sub> </a><br /> <a href="https://www.linkedin.com/in/giulio-arantes/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/Yasmimruescas"> <img src="https://github.com/Yasmimruescas.png" width="100px;" alt="Yasmim Ruescas"/> <br /> <sub><b>Yasmim Ruescas</b></sub> </a><br /> <a href="https://www.linkedin.com/in/yasmim-ruescas/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/Vitoriacmlly"> <img src="https://github.com/Vitoriacmlly.png" width="100px;" alt="Vitoria Camilly"/> <br /> <sub><b>Vitoria Camilly</b></sub> </a><br /> <a href="https://www.linkedin.com/in/vitoria-camilly/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/BrunoDaniel13"> <img src="https://github.com/BrunoDaniel13.png" width="100px;" alt="Bruno Daniel"/> <br /> <sub><b>Bruno Daniel</b></sub> </a><br /> <a href="https://www.linkedin.com/in/bruno-daniel-ferreira-leite/">🔗 LinkedIn</a> </td> </tr> </table>
