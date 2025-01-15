import React, { useState } from 'react';
import API from '../../src/api';
import '../styles/CreatePost.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send POST request to create a new post
        API.post('/createPost.php', { title, content })
            .then((response) => {
                console.log(response.data.message);
                setTitle('');
                setContent('');
            })
            .catch((error) => {
                console.error("Error creating post:", error);
            });
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;