import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to My Blog</h1>
            <p>Explore posts, create your own, and stay updated with the latest content!</p>
            
            <div style={{ marginTop: '20px' }}>
                <Link to="/" style={{ marginRight: '10px', textDecoration: 'none' }}>
                    <button style={{ padding: '10px 20px', fontSize: '16px' }}>View Posts</button>
                </Link>
                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <button style={{ padding: '10px 20px', fontSize: '16px' }}>Create a Post</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;