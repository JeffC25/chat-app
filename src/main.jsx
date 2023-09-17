import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authentication } from './utils/Authentication';
import { createRoom, getUsersRooms, sendMessage } from './utils/database.js';

createRoom("jwburke2002@gmail.com", "jwburke@bu.edu");
console.log(await getUsersRooms("jwburke@bu.edu"));
sendMessage("jwburke@bu.edu", "jwburke2002@gmail.com", "this is the first message");
sendMessage("jwburke@bu.edu", "jwburke2002@gmail.com", "this is the second message");

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authentication>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Authentication>
);
