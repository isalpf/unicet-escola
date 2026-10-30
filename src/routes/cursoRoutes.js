const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/CursoController');

// Rotas explícitas com a base /curso
router.get('/curso', CursoController.listarTodos);
router.get('/curso/:id', CursoController.listarPorId);
router.post('/curso', CursoController.salvar);
router.put('/curso/:id', CursoController.editar);
router.delete('/curso/:id', CursoController.deletar);

module.exports = router;