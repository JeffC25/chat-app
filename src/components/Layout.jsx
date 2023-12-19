import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="fixed 
            bg-gradient-to-t from-cyan-200 to-blue-300
            h-max min-h-screen w-full overflow-auto -z-50">
            <div className="z-50">
                <Navbar/>
            </div>
            <div className="">
                {children}
            </div>
        </div>
    );
};

export default Layout;
