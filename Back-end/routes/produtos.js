var express = require('express');
const { getAllProdutos, addProduto } = require('../database/produtos');
var router = express.Router();



let produtos = [{
  id: 1,
  nomeProduto:'Calça Verde',
  descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
  tamanho:'P',
  categoria:'Calça',
  preco:'249.99'
},
{
  id: 2,
  nomeProduto:'Calça Verde',
  descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
  tamanho:'P',
  categoria:'Calça',
  preco:'249.99'
},
{
  id: 3, 
  nomeProduto:'Calça Verde',
  descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
  tamanho:'P',
  categoria:'Calça',
  preco:'249.99'
}

];

/* GET users listing. */
router.route('/')
.get (async (req, res, next)=> {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(await getAllProdutos());

});

router.route('/add')
.post (async (req, res)=> {

  let produto = req.body;
  await addProduto(produto);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(await getAllProdutos());

});

module.exports = router;