'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PGPORT;

app.get('/', (req, res) => {
  res.send('Hello World');
});

const Redis = require("ioredis");

const dbConnData = {
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || 'redis',
};
const client = new Redis(dbConnData);

client.on('error', err => {
  console.error('Error connecting to Redis', err);
});
client.on('connect', () => {
    console.log(`Connected to Redis.`)
    app.listen(PORT, () => {
      console.log(`API server listening at http://localhost:${PORT}`);
    });
});