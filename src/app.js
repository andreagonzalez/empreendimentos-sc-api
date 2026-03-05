require("./database/db");

const express = require("express");
require("./database/db");

const app = express();

app.use(express.json());

const empreendimentosRoutes = require("./routes/empreendimentos");

app.use("/empreendimentos", empreendimentosRoutes);

app.get("/", (req, res) => {
  res.send("API de Empreendimentos de Santa Catarina");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});