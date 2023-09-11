import Layout from './components/Layout';
import ChatRoom from './components/ChatRoom';
import LoginPage from './pages/LoginPage';

import { AuthContext } from "./utils/Authentication";
import { useContext } from 'react';

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

function App() {

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const { user } = useContext(AuthContext);

  return (
    <>
      {!user ? <>
        <LoginPage auth={auth} provider={provider}/>
      </> : <Layout>
        <div>
          <ChatRoom />
        </div>
      </Layout>}
    </>
  );
};

export default App;
