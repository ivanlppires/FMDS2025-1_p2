import express from 'express'
import * as controller from '../controllers/StudentController'
const router = express.Router();

// Students CRUD

// CREATE
/**
 * @swagger
 * /students:
 *   post:
 *     summary: Cria um novo estudante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do estudante
 *               email:
 *                 type: string
 *                 description: Email do estudante
 *     responses:
 *       500:
 *         description: Erro ao criar estudante
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string 
 *       201:
 *         description: Estudante criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.post('/', controller.create);

// READ
/**
 * @swagger
 * /students:
 *   get:
 *     summary: Retorna a relação de todos estudantes
 *     responses:
 *       500:
 *         description: Erro ao buscar estudantes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       200:
 *         description: Lista de estudantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/', controller.readAll);

router.get('/:id', controller.readOne)

// UPDATE
router.put('/:id', controller.update);

// DELETE
router.delete('/:id', controller.remove);

export default router;