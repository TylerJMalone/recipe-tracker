import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
        console.log('AuthProvider useEffect - userToken from localStorage:', userToken);
        if (userToken) {
            setUser({ token: userToken });
            console.log('AuthProvider useEffect - user state set:', { token: userToken });
        }
    }, []);

    const login = (token) => {
        console.log('AuthProvider login - token:', token);
        localStorage.setItem('userToken', token);
        setUser({ token });
        console.log('AuthProvider login - user state after login:', { token });
    };

    const logout = () => {
        console.log('AuthProvider logout');
        localStorage.removeItem('userToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
