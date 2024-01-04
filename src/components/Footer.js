import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Pdf from './assets/GriffinCristeResumeJanuary2024.docx.pdf';

library.add(fab);

function Footer() {
  return (
    <div id='footer'>
      <Fade left big cascade>
        <div className='container contact-container'>
          <h2 className='text-center contact-header block_title'>Contact</h2>
          <div className=''>
            <div className='row'>
              <div className='col-md-12'>
                <h4 className='text-center personal-info'>
                  Personal information
                </h4>
                <br></br>
                <div className='profile-picture-container'>
                  <div className='row'>
                    <div className='col-md-6 text-center'>
                      <a className='hvr-grow' href='tel:443651958'>
                        <p className='personal-info'>(443) 465-1958 </p>
                        <span class='material-icons contact-icon'>call</span>
                      </a>
                    </div>
                    <div className='col-md-6 text-center'>
                      <a
                        className='hvr-grow'
                        href='mailto:griffincriste@gmail.com'
                      >
                        <p className='personal-info'>
                          GriffinCriste@Gmail.com{' '}
                        </p>
                        <span class='material-icons contact-icon '>email</span>
                      </a>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12 text-center'>
                      <div className='resume-container btn btn-danger'>
                        <a
                          className='resume'
                          target='_blank'
                          rel='noopener noreferrer'
                          href={Pdf}
                        >
                          <FontAwesomeIcon
                            className='technology-icon hvr-grow frontend-icon'
                            icon={['fas', 'download']}
                          />
                          Download Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='col-md-7'> */}
              {/* <input name='name' placeholder='name' />
								<input name='email' placeholder='email' />
								<input name='message' placeholder='message' />
								<input className='submit btn btn-submit' /> */}

              {/* <form action='' method='post' id='contactForm' name='contactForm'>
									<fieldset>
										<div>
											<label htmlFor='contactName'>
												Name <span className='required'>*</span>
											</label>
											<input
												type='text'
												defaultValue=''
												size='35'
												id='contactName'
												name='contactName'
											/>
										</div>

										<div>
											<label htmlFor='contactEmail'>
												Email <span className='required'>*</span>
											</label>
											<input
												type='text'
												defaultValue=''
												size='35'
												id='contactEmail'
												name='contactEmail'
											/>
										</div>

										<div>
											<label htmlFor='contactSubject'>Subject</label>
											<input
												type='text'
												defaultValue=''
												size='35'
												id='contactSubject'
												name='contactSubject'
											/>
										</div>

										<div>
											<label htmlFor='contactMessage'>
												Message <span className='required'>*</span>
											</label>
											<textarea
												cols='50'
												rows='15'
												id='contactMessage'
												name='contactMessage'
											></textarea>
										</div>

										<div>
											<button className='submit'>Submit</button>
											<span id='image-loader'>
												<img alt='' src='images/loader.gif' />
											</span>
										</div>
									</fieldset>
								</form>

								<div id='message-warning'> Error boy</div>
								<div id='message-success'>
									<i className='fa fa-check'></i>Your message was sent, thank you!
									<br />
								</div>
							</div>*/}
            </div>

            <div class='contact-icon-container'>
              <div className='row'>
                <div className='col-md-12 col-12 text-center'>
                  {/* <a href='mailto:griffincriste@gmail.com'>
												<img
													alt='profile-pic'
													className='profile-picture'
													src={require('./assets/profilepicture.png')}
												/>
											</a> */}
                </div>
              </div>

              <div className='social-media-container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='social-container'>
                      <h4 className='personal-info'>Social links</h4>
                      <a
                        href='https://www.github.com/gcriste'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon
                          className='hvr-grow social-icon'
                          icon={['fab', 'github']}
                        />
                      </a>
                      <a
                        href='https://www.linkedin.com/in/griffin-criste-2ba72b148/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon
                          className='hvr-grow social-icon'
                          icon={['fab', 'linkedin']}
                        />
                      </a>
                      <a
                        href='https://www.instagram.com/gcriste/?hl=en'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon
                          className='hvr-grow social-icon'
                          icon={['fab', 'instagram']}
                        />
                      </a>
                      <a
                        href='www.facebook.com'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon
                          className='hvr-grow social-icon'
                          icon={['fab', 'facebook-square']}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div
      // style={{ backgroundImage: 'url(' + require('./assets/bg-small.jpg') + ')' }}
      // className='heroImage expand-lg'
      />
      {/* <div className='copyright-container'>
				<hr />
				<p className='copyright-text'> @Copyright Griffin Criste</p>
			</div> */}
    </div>
  );
}

export default Footer;
