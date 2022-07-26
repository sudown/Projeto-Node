const express = require('express');
const banco = require('../services/sql-server');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  queryDatabase();
  console.log('efetuando login ...');
  
});

module.exports = router;