import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState(''); // Changed from username to email
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), 
            });
    
            if (!response.ok) {
                throw new Error('Login failed');
            }
    
            const data = await response.json();
            console.log('Login data:', data);  
    
            if (data.token) {
                login(data.token); 
                navigate('/profile'); 
                
                console.error('No token received');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    


    return (
        <div className="auth-page">
            <h1>Hi! Welcome Back</h1>
            <form onSubmit={handleLogin} className="auth-form">
                <h2>Login</h2>
                <input
                type="email" // Change type to email for better validation
                placeholder="Email" // Updated placeholder
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update the state change function
            />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
                <p>Don't have an account? No worries,<a href="/signup">Sign Up</a></p>
            </form>
        </div>
    );
}

export default LoginPage;
