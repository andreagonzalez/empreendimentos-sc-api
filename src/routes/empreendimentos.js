const express = require("express");
const router = express.Router();

const controller = require("../controllers/empreendimentosController");

router.get("/empreendimentos", controller.getAll);

router.get("/empreendimentos/:id", controller.getById);

router.post("/empreendimentos", controller.create);

module.exports = router;