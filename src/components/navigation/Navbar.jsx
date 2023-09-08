
// const SearchBar = () => {
//     return (
//         <form className="static w-1/2 h-12 bg-gray-300">
//             <input type="text" className="h-full w-full"/>
//         </form>
//     )
// }

const Navbar = () => {
    return (
        <div className="fixed block h-20 w-full bg-gray-200 ">
            <form className="w-1/4 h-12 my-4 ">
                <input type="text" placeholder="search" className="h-full w-full bg-gray-300 rounded-full my-auto p-4"/>
            </form>
        </div>
    )
}

export default Navbar;