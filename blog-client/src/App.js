import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from '../src/components/PostsList';
import PostDetails from '../src/components/PostDetails';
import CreatePost from '../src/components/CreatePost';
import EditPost from '../src/components/EditPost';
import HomePage from '../src/components/HomePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/" element={<PostsList />} />
                <Route path="/post/:id" element={<PostDetails />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/edit/:id" element={<EditPost />} />
            </Routes>
        </Router>
    );
};

export default App;