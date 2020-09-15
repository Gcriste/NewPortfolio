import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Contact() {
	return (
		<Fade left big cascade>
			<div id='contact'>
				<div className='container contact-container'>
					<div className='row'>
						<div className='col-md-6 offset-md-1'>
							<div className='card contact-card'>
								<h2 className='text-center'>CONTACT</h2>
								<div className='profile-picture-container'>
									<a href='mailto:griffincriste@gmail.com'>
										<img
											alt='profile-pic'
											className='profile-picture'
											src={require('./assets/profilepicture.png')}
										/>
									</a>
								</div>

								<div class='contact-icon-container container'>
									<div className='row'>
										<div className='col-md-12'>
											<a class='hvr-grow' href='tel:443651958'>
												<span class='material-icons contact-icon'>call</span>
											</a>
											<a class='hvr-grow' href='mailto:griffincriste@gmail.com'>
												<span class='material-icons contact-icon '>email</span>
											</a>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<div className='social-media-container container'>
												<div className='social-container'>
													<a href='www.linkedin.com'>
														<FontAwesomeIcon
															className='hvr-grow social-icon'
															icon={[ 'fab', 'linkedin' ]}
														/>
													</a>
													<a href='www.instagram.com'>
														<FontAwesomeIcon
															className='hvr-grow social-icon'
															icon={[ 'fab', 'instagram' ]}
														/>
													</a>
													<a href='www.facebook.com'>
														<FontAwesomeIcon
															className='hvr-grow social-icon'
															icon={[ 'fab', 'facebook' ]}
														/>
													</a>
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
		</Fade>
	);
}

export default Contact;
