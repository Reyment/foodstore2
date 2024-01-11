const mongoose = require("mongoose");
// const { dbHost, dbName, dbPass, dbPort, dbUser } = require("../app/config");

// // `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
// mongoose.connect(
//   `mongodb+srv://${dbUser}:${dbPass}@foodstore.3kqbupj.mongodb.net/${dbName}?retryWrites=true&w=majority`
// );

mongoose.connect('mongodb://127.0.0.1:27017/api_pos', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb+srv://mnyabdulghani:sfJ25vvM9uiY3UbJ@cluster0.k2a2zcq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
