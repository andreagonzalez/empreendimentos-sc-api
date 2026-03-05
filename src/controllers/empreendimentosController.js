const db = require("../database/db");

exports.criarEmpreendimento = (req, res) => {
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
    [
      nomeEmpreendimento,
      nomeEmpreendedor,
      municipio,
      segmento,
      contatoEmail,
      status
    ],
    function (err) {
      if (err) {
        return res.status(500).json({ erro: err.message });
      }

      res.status(201).json({
        message: "Empreendimento criado com sucesso",
        id: this.lastID
      });
    }
  );
};