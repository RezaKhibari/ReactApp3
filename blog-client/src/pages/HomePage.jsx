import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const posts = [
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' },
    ];

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;