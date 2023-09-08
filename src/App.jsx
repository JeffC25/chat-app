import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./utils/firebase"
import Navbar from "./components/navigation/Navbar";

// const app = initializeApp(firebaseConfig);

function App() {
  // console.log(app);
  return (
    <Navbar/>
  )
}

export default App
