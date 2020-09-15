import React from 'react';
import Fade from 'react-reveal/Fade';

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
									<img
										alt='profile-pic'
										className='profile-picture'
										src={require('./assets/profilepicture.png')}
									/>
								</div>
								<div class='contact-icon-container'>
									<a class='hvr-grow' href='tel:443651958'>
										<span class='material-icons contact-icon'>call</span>
									</a>
									<a class='hvr-grow' href='mailto:griffincriste@gmail.com'>
										<span class='material-icons contact-icon '>email</span>
									</a>
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
