import * as utils from './utils/firebase';
import Layout from './components/Layout';
import ChatRoom from './components/ChatRoom';

const app = utils.app;
const auth = utils.auth;
const database = utils.database;

function App() {
  
  return (
    <Layout>
      <div>
        <ChatRoom/>
      </div>
    </Layout>
  );
};

export default App;
