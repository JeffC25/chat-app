import '../utils/firebase';
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const SearchBar = () => {
    return (
        <form className="h-12 w-2/3 flex self-center">
            <input type="text" placeholder="search" className="h-full w-full bg-neutral-200 rounded-l-full my-auto pl-4 outline-none"/>
            <button type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 pl-4">
                
            </button>
        </form>
    );
};

const LogoutButton = () => {
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful
          }).catch((error) => {
            // An error happened
          });
    }
    return (
        <button className="h-12 w-20 bg-neutral-300 rounded-full self-center" onClick={logout}>
            Logout
        </button>
    );
};

const Navbar = () => {
    return (
        <div className="h-20 w-full bg-transparent backdrop-opacity-5 flex justify-between items-center">

            <div className="flex-grow"></div>

            <div className="flex-grow flex justify-center"> {SearchBar()} </div>

            <div className="flex-grow text-right px-4"> {LogoutButton()} </div>
            
        </div>
    );
};

export default Navbar;