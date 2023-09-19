import { createSearchParams, useNavigate, Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import '../utils/firebase';
import { createRoom } from '../utils/database';

const auth = getAuth();

const SearchBar = () => {
    const [query, setQuery] = useState("")
    async function handleSubmit(e) {
        e.preventDefault();
        const added_email = query;
        await createRoom(auth.currentUser.email, added_email);
    };
    
    return (
        <form 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 w-2/3 flex self-center shadow-lg rounded-full z-50">
            <input type="text" placeholder="Add User by Email" className="h-full w-full bg-neutral-200 text-neutral-500 rounded-l-full my-auto pl-4 outline-none"/>
            <button onClick={(event) => {handleSubmit(event)}} type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 text-cyan-600">
                Add
            </button>
        </form>
    );
};

const ConvoButton = () => {
    return (
        <div className="h-12 w-20 bg-neutral-200 hover:bg-neutral-400 rounded-full flex items-center align-middle shadow-lg">
            <Link to="/conversations" className="h-full w-full self-center text-cyan-600 flex items-center justify-center">
                Chats
            </Link>

        </div>
    );
};

const LogoutButton = () => {
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful
            navigate("/");
          }).catch((error) => {
            // An error happened
          });
    };

    return (
        <button className="h-12 w-20 bg-neutral-200 hover:bg-neutral-400 rounded-full self-center text-cyan-600 shadow-lg" onClick={logout}>
            Logout
        </button>
    );
};

const Navbar = () => {
    return (
        <div className="h-20 w-full bg-transparent backdrop-opacity-5 flex justify-between items-center">

            <div className="flex-grow text-right px-4"> {ConvoButton()} </div>

            <div className="flex-grow flex justify-center"> {SearchBar()} </div>

            <div className="flex-grow text-right px-4"> {LogoutButton()} </div>
            
        </div>
    );
};

export default Navbar;