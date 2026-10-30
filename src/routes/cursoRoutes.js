const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/CursoController');

// Rotas explícitas com a base /curso
router.get('/', CursoController.listarTodos);
router.get('/:id', CursoController.listarPorId);
router.post('/', CursoController.salvar);
router.put('/:id', CursoController.editar);
router.delete('/:id', CursoController.deletar);

module.exports = router;