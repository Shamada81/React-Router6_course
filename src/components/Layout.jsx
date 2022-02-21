import React from 'react';
import { Outlet} from "react-router-dom";
import { CustomLink } from "./CustomLink";

const Layout = () => {
	return (
		<>
			<header>
				<CustomLink to="/" className={setActive}>Home</CustomLink>
				<CustomLink to="/posts" className={setActive}>Blog</CustomLink>
				<CustomLink to="/about" className={setActive}>About</CustomLink>
			</header>

			<main className='container'>
				<Outlet />
			</main>

			<footer className='container'> copyright 2021</footer>
		</>
	);
};

export {Layout};