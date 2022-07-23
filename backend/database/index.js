const mongoose = require('mongoose');

const mongodb_uri = "mongodb://admin:admin@localhost:27017"

const connectionDB = async () => {
    try {
        await mongoose.connect(mongodb_uri);
        console.log('MongoDB is connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = { connectionDB }