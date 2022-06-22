var express = require('express');
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
.get ((req, res, next)=> {

  res.statusCode =200;
  res.setHeader('Contend-type', 'application/json');
  res.json(produtos);

});

module.exports = router;
