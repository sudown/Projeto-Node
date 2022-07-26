const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('solicitar-senha')
});

router.post('/solicitar-senha', (req, res) => {
  console.log("post solicitar senha");
});

module.exports = router;