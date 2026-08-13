# Projeto-API Lista de produtos com frontend simples em HTML/JS/CSS para cadastro e listagem

# 📦 Projeto API - Lista de Produtos

Aplicação desenvolvida para gerenciar listas e produtos, com backend em Node.js e banco de dados SQLite.  
O projeto foi estruturado para aprendizado em APIs REST, migrations, seeds e integração com frontend simples.
Banco de dados: Usamos o banco de dados SQLite (dev.sqlite3) e os dados estão estruturados, pela ferramenta migrations knex.

---
## 📂 Estrutura de Diretórios

PROJETO-API/
├── app.js              # Arquivo principal da aplicação
├── bin/www             # Inicialização do servidor
├── db/                 # Configuração do banco de dados
│   ├── migrations/     # Scripts de criação de tabelas
│   ├── seeds/          # Scripts de carga inicial (ex: produtos)
│   └── dev.sqlite3     # Banco de dados SQLite
├── routes/             # Rotas da API
│   ├── apiRouterV1.js
│   ├── apiRouterV2.js
│   └── index.js
├── gitignore
├── index.html          # Página inicial (frontend)
├── style.css           # Estilos
├── script.js           # Lógica frontend
├── images
    ├── image.png                            # Imagem exemplo
    ├── Lista de Produtos - Projeto-API.png  # Imagem exemplo
    ├── parte_index.html.png                 # Imagem exemplo
├── knexfile.js         # Configuração do Knex.js
├── package.json        # Dependências do projeto
└── README.md           # Documentação


---
## 🚀 Como executar:

1. Clone o repositório:
 ## ```bash
   git clone https://github.comDevFullStack-Kaio/Lista_Produtos.git

2. ## ```Instalar as dependências:
 rodar o comando no terminal VSCODE: 
 npm install

3. ## ```Execute as migrations e seeds:
  rodar os comandos: 
  npx knex migrate:latest
  npx knex seed:run

4. ## ```Inicie o servidor: 
   rodar o comando:
   npm start

5. Acesse no navegador:
   Acessar http://localhost:5220 e como funciona o formulário de adicionar produto.

🌐 Modo Estático (GitHub Pages)
Este projeto também pode ser publicado como site estático.
Nesse modo, os arquivos index.html, style.css e script.js ficam na raiz e a tabela de produtos já aparece preenchida no HTML.

Diferença entre os modos
- Dinâmico: os produtos são carregados da API (/api/v1/produtos).
- Estático: os produtos estão escritos diretamente no index.html.

🛠️ Tecnologias utilizadas
- Node.js + Express
- Knex.js (Query Builder)
- SQLite3
- HTML, CSS e JavaScript (frontend simples)

📖 Funcionalidades:
- Cadastro e listagem de produtos
- Criação de listas de produtos
- API REST com versões (v1 e v2)
- Frontend básico para interação

🤝 Contribuição
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b minha-feature)

Commit suas alterações (git commit -m 'Adicionei minha feature')

Push para a branch (git push origin minha-feature)

Abra um Pull Request


📜 Licença
Este projeto está sob a licença MIT.
MIT - Massachusetts Institute of Technology

Copyright (c) 2026 Vanderlei Jose da Silva - Kaio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:



