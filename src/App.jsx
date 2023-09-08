import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./utils/firebase"

const app = initializeApp(firebaseConfig);

function App() {
  console.log(app);
  return (
    <>
      Hello World!
    </>
  )
}

export default App
