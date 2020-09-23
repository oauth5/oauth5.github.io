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

  var google_provider = new firebase.auth.GoogleAuthProvider();

  // firebase.auth().onAuthStateChanged((user) => {
  //   if (!!user) {
  //     alert(`${user.displayName || user.email}`);
  //   }
  // });

  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword("junk@novocin.com", "fartfart")
  //   .catch(function (error) {
  //     alert(error.message);
  //   });

  firebase.auth().onAuthStateChanged((user) => {
    if (!!user) {
      alert(`${user.displayName || user.email}`);
    }
  });

  // $("#loginemail").click(() => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword($("#email").val(), $("#password").val())
  //     .catch(function (error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       alert(errorMessage);
  //     });
  // });

  // $("#register").click(() => {
  //   let pwd1 = $("#password").val();
  //   let pwd2 = $("#password2").val();
  //   if (pwd1 == pwd2) {
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword($("#email").val(), $("#password").val())
  //       .catch(function (error) {
  //         var errorCode = error.code;
  //         var errorMessage = error.message;
  //         alert(errorMessage);
  //       });
  //   } else {
  //     alert("passwords don't match");
  //   }
  // });

  // $("#reset").click(() => {
  //   firebase.auth().sendPasswordResetEmail($("#email").val());
  // });

  $("#login").click(() => {
    // alert("log in button clicked");
    alert(JSON.stringify(google_provider));
    firebase.auth().signInWithRedirect(google_provider);
  });
});
