import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();

    // Example post data for demonstration
    const post = {
        id,
        title: `Post ${id} Title`,
        content: `Content for post ${id}.`,
    };

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetails;