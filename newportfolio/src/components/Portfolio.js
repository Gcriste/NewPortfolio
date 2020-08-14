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
										<div className='col-sm-3'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>GOT Memory Game </strong>
													</h4>
													<div className='card-body'>
														<a href='#demo2' data-toggle='collapse'>
															<img
																src='assets/images/game of thrones.jpeg'
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
										<div className='col-sm-3'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>Google Book Search</strong>
													</h4>
													<div className='card-body'>
														<a href='#demo' data-toggle='collapse'>
															<img
																src='assets/images/google pic.png'
																className='person'
																alt='pic of Google'
															/>
														</a>
														<div id='demo' className='collapse'>
															<h5>
																{' '}
																<a
																	href='https://mysterious-wave-30496.herokuapp.com/'
																	className='pichead'
																>
																	{' '}
																	Live Link
																</a>
															</h5>
															<h5>
																{' '}
																<a
																	href='https://github.com/Gcriste/googlebooksearch/tree/master/newgooglesearch'
																	className='pichead'
																>
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
										<div className='col-sm-3'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>Gig Finder </strong>
													</h4>
													<div className='card-body'>
														<a href='#demo3' data-toggle='collapse'>
															<img
																src='assets/images/gig.png'
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
										<div className='col-sm-3'>
											<div className='card well'>
												<div className='card-header'>
													<h4 className='text-center card-title'>
														<strong>Budge-It</strong>
													</h4>
													<div className='card-body'>
														<a href='#demo4' data-toggle='collapse'>
															<img
																src='assets/images/budge-it-170219154254-thumbnail-4.jpg'
																className='person'
																alt='pic of budget'
															/>
														</a>
														<div id='demo4' className='collapse'>
															<h5>
																{' '}
																<a
																	href='https://budgewisergcriste.herokuapp.com/'
																	className='pichead'
																>
																	{' '}
																	Live Link
																</a>
															</h5>
															<h5>
																{' '}
																<a
																	href='https://github.com/Gcriste/BudgeIt'
																	className='pichead'
																>
																	{' '}
																	GitHub Link{' '}
																</a>
															</h5>
															<p className='app-description'>
																A Budgetting App that tracks monthly budgets and
																expenses based on transactions.
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
