(function () {
    //--Initialize Firebase--//
    const config = {
        apiKey: "AIzaSyBg0zqcQPsDieHmoqv2Hs1qO0EfcfVTxVg",
        authDomain: "unfortunatecookies-8e40c.firebaseapp.com",
        databaseURL: "https://unfortunatecookies-8e40c.firebaseio.com",
        projectId: "unfortunatecookies-8e40c",
        storageBucket: "unfortunatecookies-8e40c.appspot.com",
        messagingSenderId: "514339465105"
    };

    firebase.initializeApp(config);
    var database = firebase.database();
//--Get Elements--//
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogoutS');

//--Add Login Event--//
    btnLogin.addEventListener('click', e => {
    //--Get Email and Password--//
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //--Sign In--//
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    });

//--Add SignUp Event--//
btnSignUp.addEventListener('click', e => {
//--Get Email and Password--//
//--TODO: CHECK FOR REAL EMAIL--//    

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //--Sign In--//
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

    //--Add Realtime Listener--//
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    });
})
})();
