const express = require('express');
const router = express.Router({mergeParams: true});

const Book = require('../modules/Book');


router.get('/', async (req, res) => {
    try {
      result = await Book.find()
      return res.send(result)
    } catch (err) {
      console.log(err)
      res.status(400)
      res.send(err)
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      result = await Book.findById(req.params.id)
      return res.send(result);
    } catch (err) {
      console.log(err)
      res.status(400)
      res.send(err)
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      result = await Book.create(req.body)
      return res.send(result);
    } catch (err) {
      console.log(err)
      res.status(400)
      res.send(err)
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      result = await Book.findByIdAndDelete(id)
      return res.send(result);
    } catch (err) {
      console.log(err)
      res.status(400)
      res.send(err)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      result = await Book.findByIdAndUpdate(id, req.body)
      return res.send(result);
    } catch (err) {
      console.log(err)
      res.status(400)
      res.send(err)
    }
  });

  router.post('/:id/rate', async (req, res) => {
    try {
      const id = req.params.id;
      const score = req.body.score;
      bookFromDb = await Book.findById(id)
      const newRatingCount = bookFromDb.rating_count + 1;
      const newRatingSum = bookFromDb.rating_sum + score;
      result = await Book.findByIdAndUpdate(id, {rating_count: newRatingCount, rating_sum: newRatingSum})
      return res.send(result);
    } catch (err) {
      console.log(err)
      res.status(400)
      res.send(err)
    }
  });
  
  module.exports = router;
  




