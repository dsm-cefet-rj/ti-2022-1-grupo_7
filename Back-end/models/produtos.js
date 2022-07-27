// const normalize = require("normalize-mongoose");
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const ProductSchema = new Schema({
//   namenomeProduto: {
//     type: String,
//     required: true,
//   },
//   descProduto: {
//     type: [String],
//     required: true,
//   },
//   tamanho: {
//     type: Number,
//     required: true,
//   },
//   categoria: {
//     type: Number,
//     required: true,
//   },
//   preco: {
//     type: Number,
//     required: true,
//   },
//   id: {
//     type: Schema.Types.ObjectId,
//     ref: "Seller",
//     required: true,
//   },
// });

// ProductSchema.plugin(normalize);

// var products = mongoose.model("Product", ProductSchema);
// module.exports = products;