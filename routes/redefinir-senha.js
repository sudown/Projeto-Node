const express = require('express');
const firebase = require('../services/firebase');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('redefinir-senha');
});

router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;