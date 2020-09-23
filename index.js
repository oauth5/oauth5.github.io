$(document).ready(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAhqQOU_tqiTYofekuP-q6R--Ku3JeR0aA",
    authDomain: "websec-oauth.firebaseapp.com",
    databaseURL: "https://websec-oauth.firebaseio.com",
    projectId: "websec-oauth",
    storageBucket: "websec-oauth.appspot.com",
    messagingSenderId: "692599753969",
    appId: "1:692599753969:web:16d15e47c704a09c926d50"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Google Auth Provider (used for redirect and login with google)
  var google_provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().onAuthStateChanged((user) => {
    if (!!user) {
      alert(`${user.displayName || user.email}`);
    }
  });

  $("#login").click(() => {
    // alert("log in button clicked");
    firebase.auth().signInWithRedirect(google_provider);
  });
  
  $("#logout").click(() => {
  alert("log out button clicked");
  firebase
    .auth()
    .signOut()
    .then(function () {
      alert("sign out successful");
    })
    .catch(function (error) {
      alert("error when trying to sign out");
    });
});
});
