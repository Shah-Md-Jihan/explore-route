import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    const { name, email, phone, username, website, address } = friend;
    console.log(friend);
    return (
        <div>
            <h1>{name}</h1>
            <h6>Email:{email}</h6>
            <p>Cell:{phone}</p>
            <small>User:{username}</small>
            <p>Web:{website}</p>
            <small>Address:{address.street}</small>
        </div>
    );
};

export default FriendDetail;