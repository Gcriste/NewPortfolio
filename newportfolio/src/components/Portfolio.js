import React from 'react';

function Nav() {
	return (
		<div id='about'>
			<div classNameName='container'>
				<div classNameName='row'>
					<div className='col-md-12 col-12'>
						<div className='card about-card'>
							<h2 className='text-center'>Portfolio</h2>
							<div id='portfolio' className='className bg-2'>
								<div className='container text-center'>
									<h3>PORTFOLIO</h3>

									<div className='row'>
										<div className='col-md-3 col-12'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>GOT Memory Game </strong>
													</h4>
													<div className='card-body'>
														<a href='#demo2' data-toggle='collapse'>
															<img
																src={require('./assets/GOT.png')}
																className='person'
																alt='pic of game of thrones'
															/>
														</a>
														<div id='demo2' className='collapse'>
															<h5>
																{' '}
																<a
																	href='https://dry-journey-39353.herokuapp.com/'
																	className='pichead'
																>
																	Live Link
																</a>
															</h5>
															<h5>
																{' '}
																<a
																	href='https://github.com/Gcriste/clickygame'
																	className='pichead'
																>
																	{' '}
																	GitHub Link
																</a>
															</h5>
															<p className='app-description'>
																{' '}
																Simple memory game based on the theme of Game of Thrones
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='col-md-3 col-12'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>Rural Community Credit Union</strong>
													</h4>
													<div className='card-body'>
														<a href='#demo' data-toggle='collapse'>
															<img
																src={require('./assets/RCCU.png')}
																className='person'
																alt='pic of Google'
															/>
														</a>
														<div id='demo' className='collapse'>
															<h5>
																{' '}
																<a href='https://www.rccu.com/' className='pichead'>
																	{' '}
																	Live Link
																</a>
															</h5>
															<h5>
																{' '}
																<a href='/' className='pichead'>
																	{' '}
																	GitHub Link{' '}
																</a>{' '}
															</h5>
															<p className='app-description'>
																A google search app that searches the google api for
																books.
															</p>
														</div>
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
													<div className='card-body'>
														<a href='#demo3' data-toggle='collapse'>
															<img
																src={require('./assets/GigFinder.png')}
																className='person'
																alt='pic of gigfinder'
															/>
														</a>
														<div id='demo3' className='collapse'>
															<h5>
																{' '}
																<a
																	href='https://newgigfinder.herokuapp.com/'
																	className='pichead'
																>
																	Live Link
																</a>
															</h5>
															<h5>
																{' '}
																<a
																	href='https://github.com/Gcriste/NewGigFinder'
																	className='pichead'
																>
																	{' '}
																	GitHub Link
																</a>
															</h5>
															<p className='app-description'>
																A Gig Finder app that helps musicians find available
																gigs.
															</p>
														</div>
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
													<div className='card-body'>
														<a href='#demo4' data-toggle='collapse'>
															<img
																src={require('./assets/MathWhiz.png')}
																className='person'
																alt='pic of budget'
															/>
														</a>
														<div id='demo4' className='collapse'>
															<h5>
																{' '}
																<a href='/' className='pichead'>
																	{' '}
																	Live Link
																</a>
															</h5>
															<h5>
																{' '}
																<a href='/' className='pichead'>
																	{' '}
																	GitHub Link{' '}
																</a>
															</h5>
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
		</div>
	);
}

export default Nav;
