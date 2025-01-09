import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from '../src/components/PostsList';
import PostDetails from '../src/components/PostDetails';
import CreatePost from '../src/components/CreatePost';
import EditPost from '../src/components/EditPost';
import HomePage from '../src/components/HomePage';
import LoginForm from '../src/components/LoginForm';
import SignupForm from '../src/components/SignupForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts" element={<PostsList />} />
                <Route path="/post/:id" element={<PostDetails />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
            </Routes>
        </Router>
    );
};

export default App;