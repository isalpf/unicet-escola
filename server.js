const express = require('express');
const estudanteRoutes = require('./src/routes/estudanteRoutes');
const cursoRoutes = require('./src/routes/cursoRoutes');

const app = express();
const PORT = 3000;

// Middleware global para interpretar JSON nas requisições
app.use(express.json());

// Registra as rotas de aplicação
app.use('/estudantes', estudanteRoutes);
app.use('/cursos', cursoRoutes);

// Rota raiz para conferência básica
app.get('/', (req, res) => {
    res.send('API Escola online e em funcionamento.')
})

// Abertura do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});