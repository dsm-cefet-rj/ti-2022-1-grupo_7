const { connectionDB } = require(".");

const getAllProdutos = async () => {
    const connection = await connectionDB(); 
    let produtos = await connection
        .collection("produtos")
        .find()
        .toArray();
    produtos.map((produto) => {
        produtos._id = produto._id.toString();
        produto.id = produto._id;
        return produto;
    });
    return produtos;
};

const addProduto = async (produto) => {
    const connection = await connectionDB();
    await connection
        .collection("produtos")
        .insertOne(produto, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
};

module.exports = { addProduto, getAllProdutos };