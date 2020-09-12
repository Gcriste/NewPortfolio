import React from 'react';

function Header() {
	return (
		<div id='header'>
			<div className='container-fluid hero-container'>
				<div className='row'>
					<div className='col-md-12 col-12'>
						<div className='header-title-container'>
							<div className='header-title-container-small'>
								<span content='W'>W</span>
								<span content='e'>e</span>
								<span content='l'>l</span>
								<span content='c'>c</span>
								<span content='o'>o</span>
								<span content='m'>m</span>
								<span content='e'>e</span>
							</div>
						</div>
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
