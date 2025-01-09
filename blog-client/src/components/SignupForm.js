import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/blog-api/signup.php', { email, password });
            alert(response.data.message); // Display server response message
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred while signing up.');
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupForm;