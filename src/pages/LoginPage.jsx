import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

// const LoginButton = ({auth, provider}) => {
//     <button className="w-1/2 h-1/2 bg-cyan-400" onClick={() => signInWithPopup(auth, provider)}>CLICK TO SIGN IN</button>
// }

const LoginPage = ({auth, provider}) => {
    return (
        <div className="place-content-center w-screen h-screen grid bg-gradient-to-t from-blue-700 to-cyan-500">
            {/* {LoginButton(auth, provider)} */}
            <button className="h-fit w-fit bg-neutral-200 rounded-full p-8 flex space-x-2 shadow-lg" onClick={() => signInWithPopup(auth, provider)}>
                <div className="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <div className="">
                    Sign in with Google
                </div>
            </button>
        </div>
    )
};

export default LoginPage;