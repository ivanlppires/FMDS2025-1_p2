import express from 'express'
import * as controller from '../controllers/StudentController'
const router = express.Router();

// Students CRUD

// CREATE
router.post('/', controller.create);

// READ
router.get('/', controller.readAll);
router.get('/:id', controller.readOne)

// UPDATE
router.put('/:id', controller.update);

// DELETE
router.delete('/:id', controller.remove);

export default router;