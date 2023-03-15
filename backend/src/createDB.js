const mongoose = require('mongoose')
const subscriberModel = require('./Model/peoples')
const data = require('./data')

//use .env to connect database
require("dotenv").config();

// Connect to DATABASE

//local uri
const DATABASE_URL = "mongodb://127.0.0.1:27017/peoples";



mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database created...'));

//refresh all connections
const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll()