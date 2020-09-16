import React from 'react';
import Fade from 'react-reveal/Fade';

function About() {
	return (
		<Fade left big cascade>
			<div id='about'>
				<div className='container about-container'>
					<div className='row'>
						<div className='col-md-6 offset-md-1'>
							<div className=''>
								<h2 className='text-center about-header'>ABOUT</h2>
								<p>
									I am a Web Developer with a background in Audio Engineering and Education. My
									strength in utilizing creative methods when analytical problem solving sets me apart
									from others, as it allows me to find the most appropriate and effective approach to
									solving issues. In addition to problem solving, my tenacity in educational
									leadership requires diligence when targeting the best approach to teaching an
									individual, as catering to an individual's needs is essential. I always try to keep
									a positive attitude, and with strong communication, patience, love and support, I
									strive to always learn more. Coding has taught me how to create, design, and produce
									full stack web applications. I am optimistically enthusiastic for furthering my
									knowledge in the web development industry.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default About;
