const express = require('express');
const cors = require("cors");
const { connectionDB } = require('./database/index');
connectionDB()

const port = 8080;

const app = express();

// Cors middleware
app.use(cors());

// application/json middleware
app.use(express.json());

// serve static files from public folder
app.use(express.static("public"));

const RotasLogin = require('./routes/login');
// const RotasUsuario = require('./routes/usuario'); 
const RotasProdutos = require('./routes/produtos');

app.use('/login', RotasLogin);
// app.use('/usuario', RotasUsuario);
app.use('/produtos', RotasProdutos);

// definir mensagem de erro para rotas não utilizadas
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found",
    });
});

app.listen(port, () => {
    console.log(`Server running on port https:localhost:${port}`);
});