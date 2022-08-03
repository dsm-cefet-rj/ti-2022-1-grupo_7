const { connectionDB } = require(".");
const { ObjectId } = require("mongodb");

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

const removeProduto = async (produto) => {
    const connection = await connectionDB();
    console.log(produto);
    await connection
        .collection("produtos")
        .deleteOne({"_id": ObjectId(produto)}, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
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

module.exports = { addProduto, getAllProdutos, removeProduto };