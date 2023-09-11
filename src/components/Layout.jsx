import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <div className="absolute 
            bg-gradient-to-t from-blue-700 to-cyan-500
            h-max min-h-screen w-full overflow-auto -z-50">
            <div>
                <Navbar/>
            </div>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default Layout;