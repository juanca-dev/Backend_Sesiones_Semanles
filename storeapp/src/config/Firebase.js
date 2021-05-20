import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBEFo21C0GgnFg1wY4r35cQgy8WPkkq0YA",
    authDomain: "xioma-47b55.firebaseapp.com",
    projectId: "xioma-47b55",
    storageBucket: "xioma-47b55.appspot.com",
    messagingSenderId: "55110452653",
    appId: "1:55110452653:web:71cd1f2bc49eadf5ea0d24"
};

//Con esto inicializamos una instancia de Firebase dentro de nuestro proyecto React
const fire = firebase.initializeApp(config)

export{
  fire as default
}