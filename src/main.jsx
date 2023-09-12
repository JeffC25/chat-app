import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authentication } from './utils/Authentication';
import { addUserByUID, getEmailByUID, sendAMessage, getListOfMessages, getListOfFriends, getMostRecentMessage } from "./utils/database";

console.log(await getListOfFriends("jwburke2002@gmail.com"))
console.log(await getMostRecentMessage("jwburke2002@gmail.com", "jwburke@bu.edu"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authentication>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Authentication>
);
