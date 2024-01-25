import React, {useEffect} from 'react';
import firebase from "firebase/compat/app";
import { userInf } from "../../App";



interface LoginProps {
    updateUser: (newValue: userInf) => void;
}


const Login: React.FC<LoginProps> = ({ updateUser }) => {
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

    var firebaseui = require('firebaseui');

        // Initialize Firebase
        const app = firebase.initializeApp(firebaseConfig);

    //ui configuration file
    var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult: any, redirectUrl: any) {
                    updateUser(authResult.additionalUserInfo.profile);
                    //console.log(authResult, "hello");
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                const loaderElement = document.getElementById('loader');
                if (loaderElement) {
                    loaderElement.style.display = 'none';
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

    useEffect(() => {
        // Initialize the FirebaseUI Widget using Firebase.
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig)
        //console.log(userInfo)
        return () => {
            // Clean up FirebaseUI when the component unmounts
            ui.delete();
        };
    }, []);

    return (
        <div className="">
            <h1>Welcome to My Awesome App</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </div>
    );
}

export default Login;