import React, { createContext, useState, useEffect, useContext } from 'react'; // Added useContext import

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check local storage for user token on initial load
        const userToken = localStorage.getItem('userToken');
        if (userToken) {
            setUser({ token: userToken });
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('userToken', userData.token);
        setUser(userData);
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
