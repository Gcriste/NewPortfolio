import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Pdf from './assets/GriffinCriste.Resume.2024.docx.pdf';
library.add(fab);

function About() {
  return (
    <Fade>
      <div id='about'>
        <section id='services' class='service-area'>
          <div class='container'>
            <h2 class='block_title'>Services</h2>
            <div class='card service-card'>
              <div class='row'>
                <div class='col-lg-3 col-md-4 offset-md-1 offset-lg-1 text-center col-sm-6 image-container-about'>
                  {/* <div class='services'>
									<div class='service-wrap'> */}
                  {/* <i class='pe-7s-science pe-dj pe-va'></i> */}
                  {/* <FontAwesomeIcon
											className='technology-icon hvr-grow frontend-icon'
											icon={['fab', 'html5']}
										/> */}
                  <img
                    src={require('./assets/profilepicture.png')}
                    className='app profile-pic img-fluid'
                    alt='pic of budget'
                  />

                  {/* <h3>Creative Idea</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.
										</p> */}
                  {/* </div>
								</div> */}
                </div>
                {/* <div class='col-md-3 col-sm-6'>
								<div class='services'>
									<div class='service-wrap'>
										<FontAwesomeIcon
											className='technology-icon hvr-grow frontend-icon'
											icon={['fab', 'html5']}
										/>
										<h3>Responsive Design</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.
										</p>
									</div>
								</div>
							</div> */}

                <div className='col-lg-6 col-md-5 offset-md-1 offset-lg-1 col-12'>
                  <div className=''>
                    <h2 className='text-center about-header '>ABOUT</h2>
                    <p>
                      I am a Software Developer with a foundation in Audio
                      Engineering and Education. Maintaining a positive attitude
                      is my guiding principle. Fueled by effective
                      communication, patience, and unwavering love and support,
                      I am dedicated to evolving into the best developer
                      possible. I embrace continuous learning and personal
                      growth. Beyond coding, my passions include playing music,
                      spending quality time with my family, and hiking.
                    </p>
                  </div>
                  <div className='about-second-container'>
                    <div className='col-lg-12 col-sm-12 col-12'>
                      <h3 className='text-center'>See my work</h3>
                      <hr />
                      <div className='about-link-container'>
                        <a
                          href='https://www.github.com/gcriste'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <FontAwesomeIcon
                            className='hvr-grow social-icon-about'
                            icon={['fab', 'github']}
                          />
                        </a>
                        <a
                          className='frontend-icon-about'
                          target='_blank'
                          rel='noopener noreferrer'
                          href={Pdf}
                        >
                          <FontAwesomeIcon
                            className='technology-icon hvr-grow '
                            icon={['fas', 'download']}
                          />
                          <h4>Resume</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
    </Fade>
  );
}

export default About;
