import express from 'express'
import * as controller from '../controllers/StudentController'
const router = express.Router();

// Students CRUD

// CREATE
router.post('/', controller.create);

// READ
/**
 * @swagger
 * /students:
 *   get:
 *     summary: Retorna a relação de todos estudantes
 *     responses:
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
 *                     type: integer (int4)
 *                   name:
 *                     type: string
 *                  email:
 *                    type: string
 */
router.get('/', controller.readAll);

router.get('/:id', controller.readOne)

// UPDATE
router.put('/:id', controller.update);

// DELETE
router.delete('/:id', controller.remove);

export default router;