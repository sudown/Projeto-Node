const express = require('express');
const { Connection, Request } = require("tedious");
const path = require('path');
const login = require('./routes/login');
const register = require('./routes/register');
const solicitarSenha = require('./routes/solicitar-senha');
const redefinirSenha = require('./routes/redefinir-senha');
const banco = require('./services/sql-server');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/login', login);
app.use('/register', register);
app.use('/solicitar-senha', solicitarSenha);
app.use('/redefinir-senha', redefinirSenha);

app.get('/', (req, res) => {
  //res.render('index', {titulo: 'Bem vindo!'});
  res.redirect('/login');
});

app.listen(3000);