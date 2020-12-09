'use strict';

const express = require('express');
const Bananas = require('../models/banana');
const bananas = new Bananas();

const router = express.Router();

// RESTful routes
router.get('/bananas', getBananas);
router.get('/bananas/:id', getOneBanana);
router.post('/bananas', createBanana);
router.put('/bananas/:id', updateBanana);
router.delete('/bananas/:id', deleteBanana);

// RESTful route handlers
function getBananas(req, res) {
  const allBananas = bananas.get()
  res.status(200).json(allBananas);
}

function getOneBanana(req, res) {
  const id = req.params.id;
  const oneBanana = bananas.get(id);
  res.status(200).json(oneBanana);
}

function createBanana(req, res) {
  const obj = req.body;
  const newBanana = bananas.create(obj)
  res.status(200).json(newBanana);
}

function updateBanana(req, res) {
  res.status(200).send('updating banana');
}

function deleteBanana(req, res) {
  res.status(200).send('deleting banana');
}

module.exports = router;