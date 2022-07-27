require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb"); 
// const mongoose = require('mongoose');

console.log(process.env.DB_URI);

const mongodb_uri = process.env.DB_URI

const client = new MongoClient(mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

const connectionDB = async () => {
    const connection = await client.connect();
    return connection.db("BazarJV");
};


module.exports = { connectionDB }