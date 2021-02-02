import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Technologies() {
	return (
		<Fade right cascade>
			<div id='technology'>
				<div className='container technology-container'>
					<div className='row'>
						<div className='col-md-12 text-center'>
							<h2 className='text-center technology-header block_title'>TECHNOLOGIES</h2>

							<div className='col-md-8 offset-md-4'>
								<div className='card technology-card'>
									<div className='frontend-header-container'>
										<h3 className='frontend-header'>Frontend</h3>
									</div>

									<div className='frontend-container'>
										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow frontend-icon'
												icon={['fab', 'html5']}
											/>
											<div className='icon-header '>HTML</div>
										</div>
										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow frontend-icon'
												icon={['fab', 'css3']}
											/>

											<div className='icon-header'>CSS</div>
										</div>
										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon  hvr-grow frontend-icon'
												icon={['fab', 'sass']}
											/>
											<div className='icon-header'>Sass</div>
										</div>

										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow frontend-icon'
												icon={['fab', 'less']}
											/>
											<div className='icon-header'>Less</div>
										</div>

										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow frontend-icon'
												icon={['fab', 'bootstrap']}
											/>
											<div className='icon-header'>Bootstrap</div>
										</div>

										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow frontend-icon'
												icon={['fab', 'js']}
											/>
											<div className='icon-header'>Javascript</div>
										</div>

										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow frontend-icon'
												icon={['fab', 'react']}
											/>
											<div className='icon-header'>React</div>
										</div>
									</div>
									<div className='backend-header-container'>
										<h3 className='backend-header'>Backend</h3>
									</div>
									<div className='backend-container'>
										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow backend-icon'
												icon={['fab', 'node']}
											/>
											<div className='icon-header'>Node.js</div>
										</div>
										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow backend-icon'
												icon={['fab', 'mysql']}
											/>
											<div className='icon-header'>mySQL</div>
										</div>
										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow backend-icon'
												icon={['fab', 'mongodb']}
											/>
											<div className='icon-header'>MongoDB</div>
										</div>
										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow backend-icon'
												icon={['fab', 'c#']}
											/>
											<div className='icon-header'>C#</div>
										</div>
										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow backend-icon'
												icon={['fab', 'git']}
											/>

											<div className='icon-header'>GIT</div>
										</div>
										<div className='icon-container'>
											<FontAwesomeIcon
												className='technology-icon hvr-grow backend-icon'
												icon={['fab', 'python']}
											/>
											<div className='icon-header'>Python</div>
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

export default Technologies;
