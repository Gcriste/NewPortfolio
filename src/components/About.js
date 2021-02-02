import React from 'react';
import Fade from 'react-reveal/Fade';

function About() {
	return (
		<div>
			<section id='services' class='service-area'>
				<div class='container'>
					<h2 class='block_title'>Services</h2>
					<div class='row'>
						<div class='col-md-3 col-sm-6'>
							<div class='services'>
								<div class='service-wrap'>
									<i class='pe-7s-science pe-dj pe-va'></i>
									<h3>Creative Idea</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.</p>
								</div>
							</div>
						</div>
						<div class='col-md-3 col-sm-6'>
							<div class='services'>
								<div class='service-wrap'>
									<i class='pe-7s-monitor pe-dj pe-va'></i>
									<h3>Responsive Design</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.</p>
								</div>
							</div>
						</div>

						<Fade left big cascade>
							<div id='about'>
								<div className='container about-container'>
									<div className='row'>
										<div className='col-md-6 col-12'>
											<div className=''>
												<h2 className='text-center about-header'>ABOUT</h2>
												<p>
													I am a Web Developer with a background in Audio Engineering and
													Education. My strength in utilizing creative methods when analytical
													problem solving sets me apart from others, as it allows me to find
													the most appropriate and effective approach to solving issues. In
													addition to problem solving, my tenacity in educational leadership
													requires diligence when targeting the best approach to teaching an
													individual, as catering to an individual's needs is essential. I
													always try to keep a positive attitude, and with strong
													communication, patience, love and support, I strive to always learn
													more. Coding has taught me how to create, design, and produce full
													stack web applications. I am optimistically enthusiastic for
													furthering my knowledge in the web development industry.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Fade>
						{/* <div class='col-md-3 col-sm-6'>
							<div class='services'>
								<div class='service-wrap'>
									<i class='pe-7s-edit pe-dj pe-va'></i>
									<h3>Clean &amp; Nice</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.</p>
								</div>
							</div>
						</div>
						<div class='col-md-3 col-sm-6'>
							<div class='services'>
								<div class='service-wrap'>
									<i class='pe-7s-config pe-dj pe-va'></i>
									<h3>Support</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
