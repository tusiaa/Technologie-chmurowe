const express = require('express');
const router = express.Router({mergeParams: true});
const client = require('../config/redisClient');
  
  router.get('/:key', async (req, res) => {
    try {
      client.get(req.params.key).then( value => { 
      return res.send(value);
      })
    } catch (err) {
      res.status(400)
      res.send(err)
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      const respond = await client.set(req.body.key, req.body.value)
      return res.send(respond);
    } catch (err) {
      res.status(400)
      res.send(err)
    }
  });
  
  router.put('/:key', async (req, res) => {
    try {
      const respond = await client.set(req.params.key, req.body.value) 
      return res.send(respond);
    } catch (err) {
      res.status(400)
      res.send(err)
    }
  });
  
  router.delete('/:key', async (req, res) => {
    try {
      const respond = await client.del(req.params.key) 
      return res.send("Deleted");
    } catch (err) {
      res.status(400)
      res.send(err)
    }
  });
  
  
  module.exports = router;
  