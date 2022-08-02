const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { connectionDB } = require('../database/index');


const jwt_secret = "supersecret";

const saltRounds = 10;

router.post("/Cadastrar", async (req, res) => {// Rota de cadastro
    const { nome, email, senha } = req.body;
    const conn = await connectionDB();

    const usuario = await conn.collection("usuario").findOne({ email });
    if (usuario) {
        return res.status(400).json({ error: "Usuário já existe" });
    } else {
        try {
            const hash = await bcrypt.hash(senha, saltRounds);
            const usuario = {
                nome,
                email,
                senha: hash,
                tipo: "user"
            };
            await conn.collection("usuario").insertOne(usuario);
            return res.status(200).json({ message: "Usuário cadastrado com sucesso" });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}
);

router.post("/", async (req, res) => {// Rota de login
    const { email, password} = req.body;

    const conn = await connectionDB();

    const usuario = await conn.collection("usuario").findOne({ email });
    if (!usuario) {
        return res.status(400).json({ error: "Usuário não encontrado" });
    } else {
        await bcrypt.compare(password, usuario.senha, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).json({ error: "Erro ao logar" });
            }
            if (result) {
                const token = jwt.sign({ 
                    id: usuario._id,
                    nome: usuario.nome,
                    email: usuario.email,
                    tipo: usuario.tipo
                }, jwt_secret, { expiresIn: "1h" });
                return res.status(200).json({ token });
            } else {
                return res.status(400).json({ error: "Senha incorreta" });
            }
        });
    }
});


module.exports = router;