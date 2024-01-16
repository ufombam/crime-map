import React from 'react';
import { initializeApp } from "firebase/app";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function Login() {
    return (
        <div className="App">
            This is the login page
        </div>
    );
}

export default Login;
