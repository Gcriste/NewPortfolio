import React from 'react';

function Header() {
	return (
		<header id='header'>
			<div class='center text-center'>
				<div className='header-title-container'>
					<h1 class='bigheadline'>Griffin Criste</h1>
					<h4 class='subheadline'>
						<em>Slogan here</em>
					</h4>
				</div>
			</div>
			<div class='bottom'>
				<a data-scroll href='#navigation' class='scrollDown animated pulse' id='scrollToContent'>
					<i class='pe-7s-angle-down-circle pe-va'></i>
				</a>
			</div>
		</header>

		// <div id='header'>
		// 	<div className='container-fluid hero-container'>
		// 		<div className='row'>
		// 			<div className='col-md-12 col-12'>
		// 				<div className='header-title-container'>
		// 					<span className='welcome-letter' content='W'>
		// 						W
		// 					</span>
		// 					<span className='welcome-letter' content='e'>
		// 						e
		// 					</span>
		// 					<span className='welcome-letter' content='l'>
		// 						l
		// 					</span>
		// 					<span className='welcome-letter' content='c'>
		// 						c
		// 					</span>
		// 					<span className='welcome-letter' content='o'>
		// 						o
		// 					</span>
		// 					<span className='welcome-letter' content='m'>
		// 						m
		// 					</span>
		// 					<span className='welcome-letter' content='e'>
		// 						e
		// 					</span>
		// 				</div>
		// 				<div className=' welcome-container expand-lg' />

		// 				{/* // style={{ backgroundImage: 'url(' + require('./assets/coding.jpg') + ')' }} */}
		// 				<div className='about-top' />
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default Header;
