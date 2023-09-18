import { createContext, useEffect, useState } from "react";
import { getAuth, setPersistence } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const Authentication = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const changeState = onAuthStateChanged(getAuth(), (user) => {
            setUser(user);
        });

        return () => {
            changeState();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};