import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className="home-title">Welcome to My Blog</h1>
            <p className="home-description">Explore posts, create your own, and stay updated with the latest content!</p>
            
            <div className="home-buttons">
                {/* Existing Buttons */}
                <Link to="/posts" className="btn btn-primary">
                    View Posts
                </Link>
                <Link to="/create" className="btn btn-warning">
                    Create a Post
                </Link>
            </div>

            <div className="auth-buttons">
                {/* New Login and Signup Buttons */}
                <Link to="/login" className="btn btn-login">
                    Login
                </Link>
                <Link to="/signup" className="btn btn-signup">
                    Signup
                </Link>
            </div>
        </div>
    );
};

export default HomePage;