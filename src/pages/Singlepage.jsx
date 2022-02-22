import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Singlepage = () => {
	const { id } = useParams();
	const [ post, setPost ] = useState(null);
	const navigate = useNavigate();

	const goBack = () => navigate(-1);
	const goHome = () => navigate('/', {replace: true});

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())
			.then(data => setPost(data))
	},[id])

	return (
		<div>
			<button onClick={goBack}>Go back</button>
			{/* Bad approach - не делать*/}
			<button onClick={goHome}>Go home</button>
			{ post && (
				<>
					<h1>{ post.title }</h1>
					<p>{ post.body }</p>
					<Link to={'edit'}>Edit this post</Link>
				</>
			)}
		</div>
	);
};

export {Singlepage};