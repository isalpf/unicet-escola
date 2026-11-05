const express = require('express');
const router = express.Router();
const MatriculaController = require('../controllers/MatriculaController');

// Rotas explícitas com a base /curso
router.get('/', MatriculaController.listarTodos);
router.get('/:id', MatriculaController.listarPorId);
router.post('/', MatriculaController.salvar);
router.put('/:id', MatriculaController.editar);
router.delete('/:id', MatriculaController.deletar);

module.exports = router;