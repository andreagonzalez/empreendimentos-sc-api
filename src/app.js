const express = require("express");
const app = express();

const db = require("./database/db");

const empreendimentosRoutes = require("./routes/empreendimentos");

app.use(express.json());

app.use("/", empreendimentosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});