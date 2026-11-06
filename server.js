const express = require('express');
const estudanteRoutes = require('./src/routes/estudanteRoutes');
const cursoRoutes = require('./src/routes/cursoRoutes');
const disciplinaRoutes = require('./src/routes/disciplinaRoutes');
const matriculaRoutes = require('./src/routes/matriculaRoutes');
const professorRoutes = require('./src/routes/professorRoutes');
const notasRoutes = require('./src/routes/notasRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/docs/swagger-output.json');

const app = express();
const PORT = 3000;

// Middleware global para interpretar JSON nas requisições
app.use(express.json());

// Registra as rotas de aplicação
app.use('/estudantes', estudanteRoutes);
app.use('/cursos', cursoRoutes);
app.use('/disciplinas', disciplinaRoutes);
app.use('/matriculas', matriculaRoutes);
app.use('/professores', professorRoutes);
app.use('/notas', notasRoutes);

// Disponibiliza a rota de documentação visual
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rota raiz para conferência básica
app.get('/', (req, res) => {
    res.send('API Escola online e em funcionamento.')
})

// Abertura do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});