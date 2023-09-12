import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authentication } from './utils/Authentication';
import { getListOfUsers } from './utils/database.js';

const emailList = await getListOfUsers();
console.log(emailList);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authentication>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Authentication>
);
