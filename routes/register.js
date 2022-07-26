const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res) => {
  console.log('cadastrando usuário ...');
  console.log(req.body);
});

module.exports = router;