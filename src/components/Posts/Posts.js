import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    let sl = 1;
    return (
        <div>
            <h1>Our Posts Are Here.</h1>
            {
                posts.map(post => <Post key={post.id} sl={sl++} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;