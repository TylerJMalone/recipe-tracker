import React, { useState } from 'react';
import './LoginPage.css';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function LoginPage() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const mutationResponse = await login({
              variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    return (
        <div className="auth-page">
            <h1>Hi! Welcome Back</h1>
            <form onSubmit={handleLogin} className="auth-form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                />
                <button type="submit">Log In</button>
                <p>Don't have an account? No worries,<a href="/signup">Sign Up</a></p>
            </form>
        </div>
    );
}

export default LoginPage;
