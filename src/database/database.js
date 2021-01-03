require('dotenv').config();
const mongoose = require('mongoose');

const CONNECTION_STRING = process.env.CONNECTION_STRING || '';

const initDB = () => mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log('Mongodb connected'))
.catch(err => console.log('Mongodb connected', err));

module.exports = initDB;