const express = require('express');
const estudanteRoutes = require('./src/routes/estudanteRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

//Registra as rotas de aplicação
app.use('/', estudanteRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});