import React, { useEffect, useState } from 'react';
import API from '../../src/api';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch all posts on component mount
        API.get('/getPosts.php')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;