import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDVtdJ4ht4S_B8GS1z-xi7x8Hizip5GHW8",
  authDomain: "travel-bootcamp.firebaseapp.com",
  databaseURL: "https://travel-bootcamp.firebaseio.com",
  projectId: "travel-bootcamp",
  storageBucket: "travel-bootcamp.appspot.com",
  messagingSenderId: "68718694979",
  appId: "1:68718694979:web:14ee7aeae3acd8ebdefaf6"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
