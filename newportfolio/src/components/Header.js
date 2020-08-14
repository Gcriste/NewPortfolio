import React from 'react';

function Header() {
	return (
		<div id='header'>
			<div className='container-fluid hero-container'>
				<div className='row'>
					<div className='col-md-12 col-12'>
						<img className='heroImage expand-lg' src={require('./assets/codecode.jpg')} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
