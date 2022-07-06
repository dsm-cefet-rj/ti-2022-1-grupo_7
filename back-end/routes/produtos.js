var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Produtos= require('./models/produtos');//new
  
router.use(bodyParser.json());

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
  //new
Produtos.find({})
  .then((produtosBanco) => {
    res.statusCode =200;
    res.setHeader('Contend-type', 'application/json');
    res.json(produtosBanco);
  },(err) => next(err))
  .catch((err) => next(err));

})

.post((req, res,next) => {
  
  let proxId = 1+ produtos.map(p=>p.id).reduce((x,y)=>Math.max(x,y));
  let produtos = {...req.body,id:proxId};
  produtos.push(produtos);

    res.statusCode=200;
    res.setHeader('content-type','application/json');
    res.json(produtos);
  
})




module.exports = router;
