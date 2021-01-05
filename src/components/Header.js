import React from 'react';

function Header() {
	return (
		<div id='header'>
			<div className='container-fluid hero-container'>
				<div className='row'>
					<div className='col-md-12 col-12'>
						<div className='header-title-container'>
							<span className='welcome-letter' content='W'>
								W
							</span>
							<span className='welcome-letter' content='e'>
								e
							</span>
							<span className='welcome-letter' content='l'>
								l
							</span>
							<span className='welcome-letter' content='c'>
								c
							</span>
							<span className='welcome-letter' content='o'>
								o
							</span>
							<span className='welcome-letter' content='m'>
								m
							</span>
							<span className='welcome-letter' content='e'>
								e
							</span>
						</div>
						<div className=' welcome-container expand-lg' />

						{/* // style={{ backgroundImage: 'url(' + require('./assets/coding.jpg') + ')' }} */}
						<div className='about-top' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
