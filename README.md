# API de Gerenciamento de Empreendimentos em Santa Catarina

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-5.x-blue)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

# 📌 Descrição da Solução

Esta aplicação consiste em uma **API RESTful** desenvolvida em **Node.js com Express**, que permite o gerenciamento de informações sobre empreendimentos localizados no estado de **Santa Catarina**.

A aplicação implementa um **CRUD completo (Create, Read, Update, Delete)** para cadastro, consulta, atualização e remoção de empreendimentos.

Os dados são persistidos em um banco de dados **SQLite**, permitindo uma solução simples, leve e facilmente executável em ambiente local.

A API foi organizada seguindo boas práticas de desenvolvimento, com separação de responsabilidades entre:

* **Rotas**
* **Controllers**
* **Banco de dados**

---

# 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* SQLite
* Nodemon
* Git e GitHub
* Bruno (para testes de API)

---

# 📂 Estrutura do Projeto

```
empreendimentos-sc-api
│
├── node_modules
├── src
│   ├── controllers
│   │   └── empreendimentosController.js
│   │
│   ├── routes
│   │   └── empreendimentos.js
│   │
│   ├── database
│   │   └── db.js
│   │
│   └── app.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

# 📊 Estrutura dos Dados

Cada empreendimento possui os seguintes campos:

* **id** (gerado automaticamente)
* **nomeEmpreendimento**
* **nomeEmpreendedor**
* **municipio**
* **segmento**

Segmentos possíveis:

* Tecnologia
* Comércio
* Indústria
* Serviços
* Agronegócio

Outros campos:

* **contatoEmail**
* **status** (ativo ou inativo)

---

# 🔗 Endpoints da API

## Criar empreendimento

```
POST /empreendimentos
```

Exemplo de body:

```json
{
  "nomeEmpreendimento": "Tech Floripa",
  "nomeEmpreendedor": "Ana Silva",
  "municipio": "Florianópolis",
  "segmento": "Tecnologia",
  "contatoEmail": "contato@techfloripa.com",
  "status": "ativo"
}
```

---

## Listar todos os empreendimentos

```
GET /empreendimentos
```

---

## Buscar empreendimento por ID

```
GET /empreendimentos/:id
```

---

## Atualizar empreendimento

```
PUT /empreendimentos/:id
```

---

## Remover empreendimento

```
DELETE /empreendimentos/:id
```

---

# 📋 Tabela de Rotas da API

| Método | Rota                   | Descrição                          |
| ------ | ---------------------- | ---------------------------------- |
| GET    | `/empreendimentos`     | Lista todos os empreendimentos     |
| GET    | `/empreendimentos/:id` | Busca um empreendimento específico |
| POST   | `/empreendimentos`     | Cria um novo empreendimento        |
| PUT    | `/empreendimentos/:id` | Atualiza um empreendimento         |
| DELETE | `/empreendimentos/:id` | Remove um empreendimento           |

---

# 📦 Exemplo de Resposta da API

## GET /empreendimentos

Resposta:

```json
[
  {
    "id": 1,
    "nomeEmpreendimento": "Tech Floripa",
    "nomeEmpreendedor": "Ana Silva",
    "municipio": "Florianópolis",
    "segmento": "Tecnologia",
    "contatoEmail": "contato@techfloripa.com",
    "status": "ativo"
  }
]
```

---

# ⚠️ Validação Básica

A API possui uma validação simples para garantir que os campos obrigatórios sejam enviados.

Campos obrigatórios:

* nomeEmpreendimento
* nomeEmpreendedor
* municipio
* segmento
* contatoEmail
* status

Caso algum campo esteja ausente, a API retorna:

```json
{
  "error": "Campos obrigatórios não preenchidos"
}
```

---

# ⚙️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

```
git clone https://github.com/SEU-USUARIO/empreendimentos-sc-api.git
```

---

## 2️⃣ Entrar na pasta do projeto

```
cd empreendimentos-sc-api
```

---

## 3️⃣ Instalar as dependências

```
npm install
```

---

## 4️⃣ Executar o servidor

```
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

# 🧪 Testes da API

As requisições da API podem ser testadas utilizando ferramentas como:

* Bruno
* Postman
* Insomnia
* cURL

---

# 🎥 Vídeo Pitch

Link para o vídeo de apresentação do projeto:

```
INSERIR LINK DO VÍDEO AQUI
```

No vídeo são apresentados:

* objetivo da aplicação
* tecnologias utilizadas
* estrutura do projeto
* demonstração das rotas da API

---

# 🔮 Melhorias Futuras

Algumas melhorias que podem ser implementadas futuramente:

* Documentação automática da API com **Swagger**
* Validação avançada de dados com **Joi ou Zod**
* Paginação na listagem de empreendimentos
* Autenticação com **JWT**
* Deploy em ambiente cloud

---

# 📄 Considerações Finais

Esta aplicação foi desenvolvida como parte de um desafio técnico com o objetivo de demonstrar conhecimentos em **desenvolvimento backend com Node.js**, criação de **APIs REST** e manipulação de banco de dados **SQLite**.

O projeto prioriza:

* simplicidade
* organização do código
* facilidade de execução
* boas práticas de estruturação de APIs
