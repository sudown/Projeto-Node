require('dotenv').config();
// Importação CommonJS modules
const express = require('express');
const path = require('path');
const firebase = require('./services/firebase');

//arquivos das rotas
const login = require('./routes/login');
const register = require('./routes/register');
const solicitarSenha = require('./routes/solicitar-senha');
const redefinirSenha = require('./routes/redefinir-senha');


// Criar aplicação WEB express
const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.use(express.static(path.join(__dirname, './public')));

// Midlewares
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

app.use('/login', login);
app.use('/register', register);
app.use('/solicitar-senha', solicitarSenha);
app.use('/redefinir-senha', redefinirSenha);

//Rotas
app.get('/', (req, res) => {
  //res.render('index', {titulo: 'Bem vindo!'});
  res.redirect('/login')
});

// Rodar a aplicação express na porta 3000
app.listen(80);