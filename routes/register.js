const express = require('express');
const firebase = require('../services/firebase');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res) => {
  console.log('cadastrando usuário ...');
  console.log(req.body);
  firebase.createUserWithEmailAndPassword(req, res);
});

module.exports = router;