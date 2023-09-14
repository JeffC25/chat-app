// import { useNavigate } from 'react-router';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import '../utils/firebase';

const auth = getAuth();

const SearchBar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(query)
        navigate({
            pathname: "/search",
            search: createSearchParams({
                query: query,
            }).toString(),
        });
    };
    
    return (
        <form 
            onSubmit={handleSubmit}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 w-2/3 flex self-center shadow-lg rounded-full">
            <input type="text" placeholder="search" className="h-full w-full bg-neutral-200 text-neutral-500 rounded-l-full my-auto pl-4 outline-none"/>
            <button type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 pl-4">
                
            </button>
        </form>
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
    }
    return (
        <button className="h-12 w-20 bg-neutral-200 rounded-full self-center text-cyan-600 shadow-lg" onClick={logout}>
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