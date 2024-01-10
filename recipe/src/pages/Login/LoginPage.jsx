import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
       
    };

    return (
        <div className="auth-page">
            <h1>Hi! Welcome Back</h1>
            <form onSubmit={handleLogin} className="auth-form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
