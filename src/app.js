require("dotenv").config();

const express = require("express");
const app = express();

const { swaggerUi, swaggerSpec } = require("./docs/swagger");
const db = require("./database/db");

const empreendimentosRoutes = require("./routes/empreendimentos");

app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.json({
    message: "API de Empreendimentos de Santa Catarina",
    status: "online"
  });
});

// rotas da API
app.use("/", empreendimentosRoutes);

// documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// porta do servidor
const PORT = process.env.PORT || 3000;

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});