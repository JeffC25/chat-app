import Navbar from "./navigation/Navbar"

const Layout = ({children}) => {
    return (
        <div className="absolute bg-gray-600 h-max min-h-screen w-full overflow-auto -z-50">
            <div>
                <Navbar/>
            </div>
            <div className="mt-20">
                {children}
            </div>
        </div>
    )
}

export default Layout;