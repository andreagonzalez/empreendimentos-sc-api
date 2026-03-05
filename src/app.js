require("./database/db");

const express = require("express");
require("./database/db");

const app = express();

app.use(express.json());

const db = require("./database/db");

// GET - listar todos os empreendimentos
app.get("/empreendimentos", (req, res) => {

  const query = "SELECT * FROM empreendimentos";

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar empreendimentos" });
      return;
    }

    res.json(rows);
  });

});

// GET - buscar empreendimento por ID
app.get("/empreendimentos/:id", (req, res) => {

  const { id } = req.params;

  const query = "SELECT * FROM empreendimentos WHERE id = ?";

  db.get(query, [id], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar empreendimento" });
      return;
    }

    if (!row) {
      return res.status(404).json({ error: "Empreendimento não encontrado" });
    }

    res.json(row);
  });

});

const empreendimentosRoutes = require("./routes/empreendimentos");

app.use("/empreendimentos", empreendimentosRoutes);

app.get("/", (req, res) => {
  res.send("API de Empreendimentos de Santa Catarina");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});