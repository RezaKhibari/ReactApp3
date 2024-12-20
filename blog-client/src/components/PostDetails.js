import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../src/api';

const PostDetails = () => {
    const { id } = useParams(); // Get post ID from the URL
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch post by ID
        API.get(`/getPostById.php?id=${id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.error("Error fetching post:", error);
            });
    }, [id]);

    return (
        <div>
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PostDetails;