// import { useNavigate } from 'react-router';
import { createSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import '../utils/firebase';

const auth = getAuth();

const SearchBar = () => {
    // const location = useLocation();
    // const params = new URLSearchParams(location.search);

    const navigate = useNavigate();
    const [query, setQuery] = useState("")
    const handleSubmit = (e) => {
        // e.preventDefault()
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
            className="h-12 w-2/3 flex self-center shadow-lg rounded-full z-50">
            <input type="text" placeholder="search" className="h-full w-full bg-neutral-200 text-neutral-500 rounded-l-full my-auto pl-4 outline-none"/>
            <button type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 pl-4">
                <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#0891b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
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
        <button className="h-12 w-20 bg-neutral-200 hover:bg-neutral-400 rounded-full self-center text-cyan-600 shadow-lg" onClick={logout}>
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