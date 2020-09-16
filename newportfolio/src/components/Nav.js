import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Nav() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark'>
			<a className='navbar-brand' href='/'>
				<h2 className='header-title'>Griffin Criste</h2>
			</a>

			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav'>
					<li className='nav-item active'>
						<a className='nav-link' href='#header'>
							{/* <span className='material-icons'>home</span> */}
							{/* <span className='nav-header'>Home</span> */}
							Home
						</a>
					</li>
					<li className='nav-item active'>
						<a className='nav-link' href='#about'>
							About
							{/* <span className='nav-header'>About</span> */}
						</a>
					</li>
					<li className='nav-item active'>
						<a className='nav-link' href='#portfolio'>
							Portfolio
							{/* <span className='material-icons'>post_add</span>{' '} */}
							{/* <span className='nav-header'>Portfolio</span> */}
						</a>
					</li>
					<li className='nav-item active'>
						<a className='nav-link' href='#technologies'>
							Technologies
							{/* <span className='material-icons'>local_offer</span>{' '} */}
							{/* <span className='nav-header'>Technologies</span> */}
						</a>
					</li>
					<li className='nav-item active'>
						<a className='nav-link' href='#contact'>
							Contact
							{/* <span className='material-icons'>comment</span>{' '} */}
							{/* <span className='nav-header'>Contact</span> */}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
