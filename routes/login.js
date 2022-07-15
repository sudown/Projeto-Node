const express = require('express');
const firebase = require('../services/firebase');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  console.log('efetuando login ...');
  console.log(req.body);
  firebase.signInWithEmailAndPassword(req, res);
});

module.exports = router;