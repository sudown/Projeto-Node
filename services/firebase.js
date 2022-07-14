// Importação CommonJS modules
const firebase = require('firebase/compat/app');

// Produtos do Firebase que serão utilizados
require('firebase/compat/auth');
require('firebase/compat/firestore');
require('firebase/firestore')

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID
};
// Inicializar App Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function signInWithEmailAndPassword(req, res){
  const {email, password} = req.body;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    //res.send(user);
    res.redirect('/tarefas');
    exibeTarefas(email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    res.send(errorCode);
  });
}

function createUserWithEmailAndPassword(req, res){
  const {nome, email, password, confirmPassword} = req.body;
  if (password != confirmPassword){
    res.send('As senhas informadas não são iguais.');
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    res.send('Usuário criado com sucesso.');
    res.redirect('/login')
    // Cadastra dados no BD // .doc().set() para dizer qual sera o id do documento // .add() para gerar id automaticamente
    db.collection("users").add({
      nome: nome,
      email: email,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    res.send(errorCode);
    // ..
  });
}

module.exports = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
}
