import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post, sl }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handlePost = () => {
        navigate(`/posts/${id}`)
    }
    return (
        <div className='post'>
            <h3>{sl}.{title}</h3>
            <p>{body}</p>
            <button onClick={handlePost}>View Post</button>
        </div>
    );
};

export default Post;