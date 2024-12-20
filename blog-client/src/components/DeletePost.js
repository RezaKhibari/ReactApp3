import React from 'react';
import API from '../../src/api';

const DeletePost = ({ id, onPostDeleted }) => {
    const handleDelete = () => {
        // Send DELETE request to delete the post
        API.delete(`/deletePost.php?id=${id}`)
            .then((response) => {
                console.log(response.data.message);
                onPostDeleted(id);
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
            });
    };

    return <button onClick={handleDelete}>Delete</button>;
};

export default DeletePost;