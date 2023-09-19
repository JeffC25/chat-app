import { createContext, useEffect, useState } from "react";
import { getAuth, setPersistence, browserSessionPersistence  } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "../components/Loading";

export const AuthContext = createContext();

export const Authentication = ({ children }) => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    setPersistence(auth, browserSessionPersistence);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    if (loading) {
        return (
            <div className="bg-gradient-to-t from-blue-600 to-cyan-500 w-screen h-screen flex flex-col justify-center fixed">
                <div className="w-full justify-center flex">
                    <Loading/>
                </div>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );

};