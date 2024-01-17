import React from 'react';
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzmddSK6BoUzi3UNzAs8umx2UZ0KGnNcc",
    authDomain: "crime-map-93121.firebaseapp.com",
    projectId: "crime-map-93121",
    storageBucket: "crime-map-93121.appspot.com",
    messagingSenderId: "2015681387",
    appId: "1:2015681387:web:d25958a3bc5c98a51d4a2e",
    measurementId: "G-4FF787HPGR"
};

//var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

//ui configuration file
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult: any, redirectUrl: any) {
                console.log(authResult)
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            const loadeElement = document.getElementById('loader');
            if (loadeElement) {
                loadeElement.style.display = 'none';
            }
        }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '/dashboard',
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                scopes: [
                    'https://www.googleapis.com/auth/contacts.readonly'
                    ],
                    customParameters: {
                    // Forces account selection even when one account
                    // is available.
                    prompt: 'select_account'
                    }
            },
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
    };
// The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
    




function Login() {
    return (
        <div className="">
            <h1>Welcome to My Awesome App</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </div>
    );
}

export default Login;