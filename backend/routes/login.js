const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Usuario = require("../models/usuario");

const jwt_secret = "supersecret";

router.post("/", async (req, res) => {// Rota de login
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        return res.status(400).json({ error: "Usuário não encontrado" });
    }else {
        if (await bcrypt.compare(senha, usuario.senha)) {
            const token = jwt.sign({ id: usuario._id }, jwt_secret, { expiresIn: "1h" });
            return res.status(200).json({
                usuario: {
                    nome: usuario.nome,
                    email: usuario.email,
                    token
                }
            });
        } else {
            return res.status(400).json({ error: "Senha incorreta" });
        }
    }
});

module.exports = router;