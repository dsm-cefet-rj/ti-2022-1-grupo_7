const express = require('express');
const cors = require("cors");
const { connectionDB } = require('./database/index');

connectionDB()

const port = 8080;

const app = express();

app.use(cors());

// application/json middleware
app.use(express.json());

// serve static files from public folder
app.use(express.static("public"));

const RotasLogin = require('./routes/login');
const RotRotasUsuario = require('./routes/usuario'); 

app.use('/login', RotasLogin);
app.use('/usuario', RotRotasUsuario);

// definir mensagem de erro para rotas não utilizadas
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found",
    });
});

app.listen(port, () => {
    console.log(`Server running on port https://localhost:${port}`);
});
