var express = require('express');
const { getAllProdutos, addProduto } = require('../database/produtos');
var router = express.Router();


router.route('/')
  .get(async (req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(await getAllProdutos());

  });

router.route('/add')
  .post(async (req, res) => {

    let produto = req.body;
    await addProduto(produto);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(await getAllProdutos());

  });

module.exports = router;