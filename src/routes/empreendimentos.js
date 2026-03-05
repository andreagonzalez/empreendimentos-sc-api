const express = require("express");
const router = express.Router();

const controller = require("../controllers/empreendimentosController");

/**
 * @swagger
 * tags:
 *   name: Empreendimentos
 *   description: Gerenciamento de empreendimentos
 */

/**
 * @swagger
 * /empreendimentos:
 *   get:
 *     summary: Lista todos os empreendimentos
 *     tags: [Empreendimentos]
 *     responses:
 *       200:
 *         description: Lista de empreendimentos
 */
router.get("/empreendimentos", controller.getAll);

/**
 * @swagger
 * /empreendimentos/{id}:
 *   get:
 *     summary: Busca um empreendimento pelo ID
 *     tags: [Empreendimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do empreendimento
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Empreendimento encontrado
 *       404:
 *         description: Empreendimento não encontrado
 */
router.get("/empreendimentos/:id", controller.getById);

/**
 * @swagger
 * /empreendimentos:
 *   post:
 *     summary: Cria um novo empreendimento
 *     tags: [Empreendimentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeEmpreendimento:
 *                 type: string
 *               nomeEmpreendedor:
 *                 type: string
 *               municipio:
 *                 type: string
 *               segmento:
 *                 type: string
 *               contatoEmail:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Empreendimento criado
 */
router.post("/empreendimentos", controller.create);

/**
 * @swagger
 * /empreendimentos/{id}:
 *   put:
 *     summary: Atualiza um empreendimento
 *     tags: [Empreendimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do empreendimento
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeEmpreendimento:
 *                 type: string
 *               nomeEmpreendedor:
 *                 type: string
 *               municipio:
 *                 type: string
 *               segmento:
 *                 type: string
 *               contatoEmail:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Empreendimento atualizado
 */
router.put("/empreendimentos/:id", controller.update);

/**
 * @swagger
 * /empreendimentos/{id}:
 *   delete:
 *     summary: Remove um empreendimento
 *     tags: [Empreendimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do empreendimento
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Empreendimento removido
 */
router.delete("/empreendimentos/:id", controller.remove);

module.exports = router;