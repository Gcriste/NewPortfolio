import React from 'react';
import Fade from 'react-reveal/Fade';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Contact() {
  return (
    <Fade left big cascade>
      {/* <div id='contact'>
				<div className='container contact-container'>
					<div className='row'>
						<div className='col-md-6 offset-md-1 col-12'>
							<div className='card contact-card'>
								<h2 className='text-center contact-header'>CONTACT</h2>
								<div className='profile-picture-container'>
									<a href='mailto:griffincriste@gmail.com'>
										<img
											alt='profile-pic'
											className='profile-picture'
											src={require('./assets/profilepicture.png')}
										/>
									</a>
								</div>

								<div class='contact-icon-container'>
									<div className='row'>
										<div className='col-md-12 col-12 text-center'>
											<a className='resume' target='_blank' href={Pdf}>
												Resume
											</a>
										</div>
										<div className='col-md-12'>
											<a className='hvr-grow' href='tel:443651958'>
												<span class='material-icons contact-icon'>call</span>
											</a>
											<a className='hvr-grow' href='mailto:griffincriste@gmail.com'>
												<span class='material-icons contact-icon '>email</span>
											</a>
										</div>
									</div>
									<div className='social-media-container'>
										<div className='row'>
											<div className='col-md-12'>
												<div className='social-container'>
													<a
														href='https://www.linkedin.com/in/griffin-criste-2ba72b148/'
														target='_blank'
													>
														<FontAwesomeIcon
															className='hvr-grow social-icon'
															icon={[ 'fab', 'linkedin' ]}
														/>
													</a>
													<a href='https://www.instagram.com/gcriste/?hl=en' target='_blank'>
														<FontAwesomeIcon
															className='hvr-grow social-icon'
															icon={[ 'fab', 'instagram' ]}
														/>
													</a>
													<a href='www.facebook.com' target='_blank'>
														<FontAwesomeIcon
															className='hvr-grow social-icon'
															icon={[ 'fab', 'facebook-square' ]}
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
			</div> */}
    </Fade>
  );
}

export default Contact;
