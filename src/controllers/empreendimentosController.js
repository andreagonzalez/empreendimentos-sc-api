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

// ATUALIZAR EMPREENDIMENTO
exports.update = (req, res) => {
  const id = req.params.id;

  const {
    nomeEmpreendimento,
    nomeEmpreendedor,
    municipio,
    segmento,
    contatoEmail,
    status
  } = req.body;

  const sql = `
    UPDATE empreendimentos
    SET 
      nomeEmpreendimento = ?,
      nomeEmpreendedor = ?,
      municipio = ?,
      segmento = ?,
      contatoEmail = ?,
      status = ?
    WHERE id = ?
  `;

  db.run(
    sql,
    [
      nomeEmpreendimento,
      nomeEmpreendedor,
      municipio,
      segmento,
      contatoEmail,
      status,
      id
    ],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        message: "Empreendimento atualizado",
        changes: this.changes
      });
    }
  );
};

// DELETAR EMPREENDIMENTO
exports.remove = (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM empreendimentos WHERE id = ?";

  db.run(sql, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Empreendimento removido",
      changes: this.changes
    });
  });
};