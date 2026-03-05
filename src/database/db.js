const sqlite3 = require("sqlite3").verbose();

// cria ou abre o banco de dados
const db = new sqlite3.Database("./empreendimentos.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err.message);
  } else {
    console.log("Conectado ao banco SQLite.");
  }
});

// cria a tabela se ela não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS empreendimentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nomeEmpreendimento TEXT NOT NULL,
      nomeEmpreendedor TEXT NOT NULL,
      municipio TEXT NOT NULL,
      segmento TEXT NOT NULL,
      contatoEmail TEXT,
      status TEXT
    )
  `);
});

module.exports = db;