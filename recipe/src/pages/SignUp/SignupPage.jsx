import React, { useState } from 'react';
import './SignupPage.css';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function SignupPage() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleSignup = async (e) => {
        e.preventDefault();
        const mutationResponse = await addUser({
            variables: {
              email: formState.email,
              password: formState.password,
              firstName: formState.firstName,
              lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
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
            <h1>Hi! Welcome Foodie!</h1>
            <form onSubmit={handleSignup} className="auth-form">
                <h2>Sign Up</h2>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
                <p>Already have an account? What are you waiting for,<a href="/login">Log In</a></p>
            </form>
        </div>
    );
}

export default SignupPage;
