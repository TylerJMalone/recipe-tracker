import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import '../../css/winter.css';
import avatar from '../../images/Spoons-logo.png'
import { useAuth } from '../../context/AuthContext'; 

function Header() {
    const { user, logout } = useAuth(); 
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/'); 
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/"><Image src={avatar}/></Link>
            </div>
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/recipes">Browse Recipes</Link>
                {user ? ( // Check if user is authenticated
                    <>
                        
                        <Link to="/profile">Profile</Link>
                        <button onClick={handleLogout}>Log Out</button> {/* Logout button */}
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
