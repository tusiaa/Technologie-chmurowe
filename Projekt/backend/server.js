
const client = require('./config/redisClient');

client.on('error', err => {
    console.error('Error connecting to Redis', err);
  });
client.on('connect', () => {
    console.log(`Connected to Redis.`)
});

const express = require('express');
const app = express();
const books = require('./routes/book');
const login = require('./routes/login');
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: '*' }));

// „Podłączamy” obsługę „endpointów”, które zdefiniowaliśmy dla kolekcji 'users' w katalogu routes/users.js
app.use('/book', books);
app.use('/login', login);

require('dotenv').config();
const dbConnData = {
    user: process.env.MONGO_USER || 'mongodb',
    password: process.env.MONGO_PASSWORD || 'mongodb',
    url: process.env.MONGO_URL || 'localhost:27017/'
};
// Łączymy się z bazą i „stawiamy” serwer API
// Do kontaktu z serwerem MongoDB wykorzystamy bibliotekę Mongoose

const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://${dbConnData.user}:${dbConnData.password}@${dbConnData.url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(response => {
    console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    const port = process.env.PORT || 3001
    app.listen(port, () => {
      console.log(`API server listening at ${port}`);
    });
  })
  .catch(error => console.error('Error connecting to MongoDB', error));

