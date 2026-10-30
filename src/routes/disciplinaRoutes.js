const express = require('express');
const router = express.Router();
const DisciplinaController = require('../controllers/DisciplinaController');

// Rotas explícitas com a base /curso
router.get('/', DisciplinaController.listarTodos);
router.get('/:id', DisciplinaController.listarPorId);
router.post('/', DisciplinaController.salvar);
router.put('/:id', DisciplinaController.editar);
router.delete('/:id', DisciplinaController.deletar);

module.exports = router;