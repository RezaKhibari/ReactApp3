import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../src/api';

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        // Fetch existing post data
        API.get(`/getPostById.php?id=${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setContent(response.data.content);
            })
            .catch((error) => {
                console.error("Error fetching post:", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send PUT request to update the post
        API.put('/updatePost.php', { id, title, content })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error("Error updating post:", error);
            });
    };

    return (
        <div>
            <h1>Edit Post</h1>
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
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
};

export default EditPost;