import React from 'react';

function Header() {
	return (
		<div id='header'>
			<div className='container-fluid hero-container'>
				<div className='row'>
					<div className='col-md-12 col-12'>
						<div
							style={{ backgroundImage: 'url(' + require('./assets/coding.jpg') + ')' }}
							className='heroImage expand-lg'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
