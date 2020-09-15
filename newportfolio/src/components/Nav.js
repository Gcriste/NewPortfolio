import React from 'react';

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
							<span className='material-icons'>home</span>
							<span className='d-none d-md-inline'>Home</span>
						</a>
					</li>
					<li className='nav-item active'>
						<a className='nav-link' href='#about'>
							<span className='material-icons'>queue_music</span>{' '}
							<span className='d-none d-md-inline'>About</span>
						</a>
					</li>
					<li className='nav-item active'>
						<a className='nav-link' href='#portfolio'>
							<span className='material-icons'>post_add</span>{' '}
							<span className='d-none d-md-inline'>Portfolio</span>
						</a>
					</li>
					<li className='nav-item active'>
						<a className='nav-link' href='#technologies'>
							<span className='material-icons'>local_offer</span>{' '}
							<span className='d-none d-md-inline'>Technologies</span>
						</a>
					</li>
					<li className='nav-item active'>
						<a className='nav-link' href='#contact'>
							<span className='material-icons'>comment</span>{' '}
							<span className='d-none d-md-inline'>Contact</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
