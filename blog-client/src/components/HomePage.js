import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to My Blog</h1>
            <p>Explore posts, create your own, and stay updated with the latest content!</p>
            
            <div style={{ marginTop: '20px' }}>
                {/* Existing Buttons */}
                <Link to="/" style={{ marginRight: '10px', textDecoration: 'none' }}>
                    <button style={{ padding: '10px 20px', fontSize: '16px' }}>View Posts</button>
                </Link>
                <Link to="/create" style={{ marginRight: '10px', textDecoration: 'none' }}>
                    <button style={{ padding: '10px 20px', fontSize: '16px' }}>Create a Post</button>
                </Link>
            </div>

            <div style={{ marginTop: '20px' }}>
                {/* New Login and Signup Buttons */}
                <Link to="/login" style={{ marginRight: '10px', textDecoration: 'none' }}>
                    <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
                        Login
                    </button>
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#28A745', color: 'white', border: 'none', borderRadius: '5px' }}>
                        Signup
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;