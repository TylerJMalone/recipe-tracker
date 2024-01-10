import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
   
    const isAuthenticated = false; 

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Spoons</Link>
            </div>
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/recipes">Browse Recipes</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/create">Create Recipe</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/logout">Log Out</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
