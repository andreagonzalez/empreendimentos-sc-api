const db = require("../database/db");

// LISTAR TODOS
exports.getAll = (req, res) => {
  const sql = "SELECT * FROM empreendimentos";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
};

// BUSCAR POR ID
exports.getById = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM empreendimentos WHERE id = ?";

  db.get(sql, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(row);
  });
};

// CRIAR
exports.create = (req, res) => {
  const {
    nomeEmpreendimento,
    nomeEmpreendedor,
    municipio,
    segmento,
    contatoEmail,
    status
  } = req.body;

  const sql = `
  INSERT INTO empreendimentos
  (nomeEmpreendimento, nomeEmpreendedor, municipio, segmento, contatoEmail, status)
  VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [nomeEmpreendimento, nomeEmpreendedor, municipio, segmento, contatoEmail, status],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        message: "Empreendimento criado",
        id: this.lastID
      });
    }
  );
};