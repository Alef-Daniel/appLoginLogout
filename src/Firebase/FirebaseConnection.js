import { firebase, initializeApp } from '@firebase/app';
import 'firebase/database';
import 'firebase/firebase-auth';

let firebaseConfig = {
    apiKey: "AIzaSyAiQDGpRgXNqUbVy7qLWJH29PpF4OERj1M",
    authDomain: "meuapp-60aca.firebaseapp.com",
    projectId: "meuapp-60aca",
    storageBucket: "meuapp-60aca.appspot.com",
    messagingSenderId: "1025302704990",
    appId: "1:1025302704990:web:4cc1887345f079f59f95cf",
    measurementId: "G-YZS5WJNB4F"
  };

  if(!firebase.apps.length){
    //Abrir minha conexao
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;