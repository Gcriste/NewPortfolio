import React from 'react';

function Nav() {
	return (
		<div id='about'>
			<div classNameName='container'>
				<div classNameName='row'>
					<div className='col-md-12 col-12'>
						<div className='card portfolio-card'>
							<h2 className='text-center'>PORTFOLIO</h2>
							<div id='portfolio' className='className bg-2'>
								<div className='container text-center'>
									<div className='row'>
										<div className='col-md-3 col-12'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>Memory Game </strong>
													</h4>
												</div>
												<div className='card-body'>
													<a href='#demo2' data-toggle='collapse'>
														<img
															src={require('./assets/GOT.png')}
															className='person img-fluid'
															alt='pic of game of thrones'
														/>
													</a>
													<div id='demo2' className='collapse'>
														{' '}
														<div className='link-container'>
															<a
																href='https://dry-journey-39353.herokuapp.com/'
																className='portfolio-link'
															>
																<h5>Live Link</h5>
															</a>{' '}
															<a
																href='https://github.com/Gcriste/clickygame'
																className='portfolio-link'
															>
																{' '}
																<h5>GitHub Link</h5>
															</a>
														</div>
														<p className='app-description'>
															{' '}
															Simple memory game based on the theme of Game of Thrones
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className='col-md-3 col-12'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>RCCU</strong>
													</h4>
												</div>
												<div className='card-body'>
													<a href='#demo' data-toggle='collapse'>
														<img
															src={require('./assets/RCCU.png')}
															className='person img-fluid'
															alt='pic of Google'
														/>
													</a>
													<div id='demo' className='collapse'>
														{' '}
														<div className='link-container'>
															<a href='https://www.rccu.com/' className='portfolio-link'>
																{' '}
																<h5>Live Link</h5>
															</a>{' '}
															<a href='/' className='portfolio-link'>
																{' '}
																<h5>GitHub Link </h5>
															</a>{' '}
														</div>
														<p className='app-description'>
															A google search app that searches the google api for books.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className='col-md-3 col-12'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>Gig Finder </strong>
													</h4>
												</div>
												<div className='card-body'>
													<a href='#demo3' data-toggle='collapse'>
														<img
															src={require('./assets/GigFinder.png')}
															className='person img-fluid'
															alt='pic of gigfinder'
														/>
													</a>
													<div id='demo3' className='collapse'>
														{' '}
														<div className='link-container'>
															<a
																href='https://newgigfinder.herokuapp.com/'
																className='portfolio-link'
															>
																<h5>Live Link</h5>
															</a>{' '}
															<a
																href='https://github.com/Gcriste/NewGigFinder'
																className='portfolio-link'
															>
																{' '}
																<h5>GitHub Link</h5>
															</a>
														</div>
														<p className='app-description'>
															A Gig Finder app that helps musicians find available gigs.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className='col-md-3 col-12'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>Math Whiz</strong>
													</h4>
												</div>
												<div className='card-body'>
													<a href='#demo4' data-toggle='collapse'>
														<img
															src={require('./assets/MathWhiz.png')}
															className='person img-fluid'
															alt='pic of budget'
														/>
													</a>
													<div id='demo4' className='collapse'>
														{' '}
														<div className='link-container'>
															<a href='/' className='portfolio-link'>
																{' '}
																<h5>Live Link</h5>
															</a>{' '}
															<a href='/' className='portfolio-link'>
																{' '}
																<h5>GitHub Link </h5>
															</a>
														</div>
														<p className='app-description'>
															A simple app to help children work on their addition,
															subtraction, multiplication and division skills.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nav;
