import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
        if (userToken) {
            setUser({ token: userToken });
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('userToken', token);
        setUser({ token });
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
