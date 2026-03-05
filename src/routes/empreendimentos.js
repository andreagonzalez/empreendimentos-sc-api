const express = require("express");
const router = express.Router();

const controller = require("../controllers/empreendimentosController");

router.post("/", controller.criarEmpreendimento);

module.exports = router;