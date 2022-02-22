import React, { useState, useEffect } from 'react';
import {Link, useLocation } from "react-router-dom";

const Blogpage = () => {
    const [ posts, setPosts ] = useState([]);
    console.log(useLocation())

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])


    return (
        <div>
            <h1>Our news</h1>
            <Link to='/posts/new'>Add new post</Link>
            {posts.length > 0 && posts.map(post => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{ post.title }</li>
                </Link>
            ))}
        </div>
    );
};

export {Blogpage};