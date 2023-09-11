import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const auth = getAuth();
const provider = new GoogleAuthProvider();

const LoginButton = () => {
    return (
        <button className="h-fit w-fit bg-neutral-200 rounded-full p-8 flex space-x-2 shadow-lg" onClick={() => signInWithPopup(auth, provider)}>
            <div className="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <div className="">
                Sign in with Google
            </div>
        </button>
    )
}

const LoginPage = () => {
    return (
        <div className="place-content-center w-screen h-screen grid bg-gradient-to-t from-blue-700 to-cyan-500">
            {LoginButton()}
        </div>
    )
};

export default LoginPage;