require('dotenv').config();
// Importação CommonJS modules
const express = require('express');
const path = require('path');
const firebase = require('./services/firebase');

// Criar aplicação WEB express
const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.use(express.static(path.join(__dirname, './public')));

// Midlewares
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

//Rotas
app.get('/', (req, res) => {
  //res.render('index', {titulo: 'Bem vindo!'});
  res.redirect('/login')
});
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  console.log('efetuando login ...');
  console.log(req.body);
  firebase.signInWithEmailAndPassword(req, res);
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  console.log('cadastrando usuário ...');
  console.log(req.body);
  firebase.createUserWithEmailAndPassword(req, res);
});

app.get('/solicitar-senha', (req, res) => {
  res.render('forgot-password')
});

app.post('/solicitar-senha', (req, res) => {
  console.log("post solicitar senha");
});

app.get('/redefinir-senha', (req, res) => {
  res.render('redefinir-senha');
});

app.post('/redefinir-senha', (req, res) => {
  console.log(req.body);
});

app.get('/tarefas', (req, res) => {
  res.render('tarefas');
  //firebase.exibeTarefas();
});

app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rodar a aplicação express na porta 3000
app.listen(80);
