import * as utils from '../utils/firebase';

const SearchBar = () => {
    return (
        <form className="h-12 w-2/3 flex self-center">
            <input type="text" placeholder="search" className="h-full w-full bg-neutral-200 rounded-l-full my-auto pl-4 outline-none"/>
            <button type="submit" className="h-full w-20 rounded-r-full bg-neutral-300 pl-4">
                <svg fill="#c0c0c0" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
            </button>
        </form>
    );
};

const LoginButton = () => {
    return (
        <button className="h-12 w-20 bg-neutral-300 rounded-full self-center" onClick={utils.userSignIn}>
            Login
        </button>
    );
};

const Navbar = () => {
    return (
        <div className="h-20 w-full bg-transparent backdrop-opacity-5 flex justify-between items-center">

            <div className="flex-grow"></div>

            <div className="flex-grow flex justify-center"> {SearchBar()} </div>

            <div className="flex-grow text-right px-4"> {LoginButton()} </div>
            
        </div>
    );
};

export default Navbar;