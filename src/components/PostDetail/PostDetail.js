import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postData = useLoaderData();
    const { userId, title, body } = postData;
    const navigate = useNavigate();
    const getAuthor = () => {
        navigate(`/friend/${userId}`);
    }
    return (
        <div>
            <h2>Post Details...{ }</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={getAuthor}>Get Author</button>
        </div>
    );
};

export default PostDetail;