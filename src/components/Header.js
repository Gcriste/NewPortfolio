import React from 'react';

function Header() {
	return (
		<div id='header'>
			<div className='container-fluid hero-container'>
				<div className='row'>
					<div className='col-md-12 col-12'>
						<div className='header-title-container'>
							<span content='W'>W</span>
							<span content='e'>e</span>
							<span content='l'>l</span>
							<span content='c'>c</span>
							<span content='o'>o</span>
							<span content='m'>m</span>
							<span content='e'>e</span>
						</div>
						<div className='heroImageTop expand-lg' />

						{/* // style={{ backgroundImage: 'url(' + require('./assets/coding.jpg') + ')' }} */}
						<div className='about-top' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
