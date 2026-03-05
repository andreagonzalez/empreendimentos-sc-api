# API de Gerenciamento de Empreendimentos em Santa Catarina

## 📌 Descrição da Solução

Esta aplicação consiste em uma **API RESTful** desenvolvida em **Node.js com Express**, que permite o gerenciamento de informações sobre empreendimentos localizados no estado de Santa Catarina.

A aplicação implementa um **CRUD completo (Create, Read, Update, Delete)** para cadastro, consulta, atualização e remoção de empreendimentos.

Os dados são persistidos em um banco de dados **SQLite**, permitindo uma solução simples, leve e facilmente executável em ambiente local.

A API foi organizada seguindo boas práticas de desenvolvimento, com separação de responsabilidades entre **rotas, controllers e banco de dados**.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* SQLite
* Nodemon
* Git e GitHub
* Bruno (para testes de API)

---

## 📂 Estrutura do Projeto

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

## 📊 Estrutura dos Dados

Cada empreendimento possui os seguintes campos:

* **id** (gerado automaticamente)
* **nomeEmpreendimento**
* **nomeEmpreendedor**
* **municipio**
* **segmento**

  * Tecnologia
  * Comércio
  * Indústria
  * Serviços
  * Agronegócio
* **contatoEmail**
* **status** (ativo ou inativo)

---

## 🔗 Endpoints da API

### Criar empreendimento

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

### Listar todos os empreendimentos

```
GET /empreendimentos
```

---

### Buscar empreendimento por ID

```
GET /empreendimentos/:id
```

---

### Atualizar empreendimento

```
PUT /empreendimentos/:id
```

---

### Remover empreendimento

```
DELETE /empreendimentos/:id
```

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/SEU-USUARIO/empreendimentos-sc-api.git
```

### 2️⃣ Entrar na pasta do projeto

```
cd empreendimentos-sc-api
```

### 3️⃣ Instalar as dependências

```
npm install
```

### 4️⃣ Executar o servidor

```
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## 🧪 Testes da API

As requisições da API podem ser testadas utilizando ferramentas como:

* Bruno
* Postman
* Insomnia
* cURL

---

## 🎥 Vídeo Pitch

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

## 📄 Considerações Finais

Esta aplicação foi desenvolvida como parte de um desafio técnico com o objetivo de demonstrar conhecimentos em desenvolvimento backend utilizando Node.js, criação de APIs REST e manipulação de banco de dados SQLite.

O projeto prioriza simplicidade, organização do código e facilidade de execução.
