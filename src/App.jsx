import Layout from './components/Layout';
import ChatRoom from './components/ChatRoom';
import LoginPage from './components/LoginPage';
import SearchResults from './components/SearchResults';

import { AuthContext } from "./utils/Authentication";
import { useContext } from 'react';

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  // const auth = getAuth();
  // const provider = new GoogleAuthProvider();

  const { user } = useContext(AuthContext);
  return (
    <>
      {!user ? <>
        <LoginPage/>
      </> :<BrowserRouter>
          <Routes>
            <Route path="" element={<ChatRoom user={user}/>}/>
            <Route path="/search" element={<SearchResults/>}/>
          </Routes>
        </BrowserRouter>}
    </>
  );
};

export default App;
