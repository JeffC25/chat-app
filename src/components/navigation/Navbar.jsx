import * as utils from '../../utils/firebase';

const Navbar = () => {
    return (
        <div className="fixed h-20 w-full bg-gray-900 flex justify-between items-center">

            <div className="flex-grow"></div>

            <form className="flex-grow h-12 flex self-center">
                <input type="text" placeholder="search" className="h-full w-full bg-gray-600 rounded-l-full my-auto pl-4 outline-none"/>
                <button type="submit" className="h-full w-20 rounded-r-full bg-gray-800 pl-4">
                    <svg fill="#c0c0c0" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
                </button>
            </form>

            <div className="flex-grow items-center text-right px-4">
                <button className="h-12 w-20 bg-gray-800 rounded-full text-white self-center" onClick={utils.userSignIn}>
                    Login
                </button>
            </div>
            
        </div>
    )
}

export default Navbar;