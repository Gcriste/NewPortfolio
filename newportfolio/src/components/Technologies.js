import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import $ from 'jquery';

library.add(fab);

function Technologies() {
	return (
		<Fade right cascade>
			<div id='technologies'>
				<div className='container technology-container'>
					<div className='row'>
						<div className='col-md-8 offset-md-4'>
							<div className='card technology-card'>
								<h2 className='text-center '>TECHNOLOGIES</h2>
								<div className='frontend-header'>
									<h3>FrontEnd </h3>
								</div>

								<div className='frontend-container'>
									<div className='icon-container'>
										<div className='icon-header '>HTML</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow frontend-icon'
											icon={[ 'fab', 'html5' ]}
										/>
									</div>
									<div className='icon-container'>
										<div className='icon-header'>CSS</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow frontend-icon'
											icon={[ 'fab', 'css3' ]}
										/>
									</div>
									<div className='icon-container'>
										<div className='icon-header'>Sass</div>
										<FontAwesomeIcon
											className='technology-icon  hvr-grow frontend-icon'
											icon={[ 'fab', 'sass' ]}
										/>
									</div>

									<div className='icon-container'>
										<div className='icon-header'>Less</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow frontend-icon'
											icon={[ 'fab', 'less' ]}
										/>
									</div>

									<div className='icon-container'>
										<div className='icon-header'>Bootstrap</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow frontend-icon'
											icon={[ 'fab', 'bootstrap' ]}
										/>
									</div>

									<div className='icon-container'>
										<div className='icon-header'>Javascript</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow frontend-icon'
											icon={[ 'fab', 'js' ]}
										/>
									</div>

									<div className='icon-container'>
										<div className='icon-header'>React</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow frontend-icon'
											icon={[ 'fab', 'react' ]}
										/>
									</div>
								</div>
								<div className='backend-header'>
									<h3>Backend</h3>
								</div>
								<div className='backend-container'>
									<div className='icon-container'>
										<div className='icon-header'>Node.js</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow backend-icon'
											icon={[ 'fab', 'node' ]}
										/>
									</div>
									<div className='icon-container'>
										<div className='icon-header'>mySQL</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow backend-icon'
											icon={[ 'fab', 'mysql' ]}
										/>
									</div>
									<div className='icon-container'>
										<div className='icon-header'>MongoDB</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow backend-icon'
											icon={[ 'fab', 'mongodb' ]}
										/>
									</div>
									<div className='icon-container'>
										<div className='icon-header'>C#</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow backend-icon'
											icon={[ 'fab', 'c#' ]}
										/>
									</div>
									<div className='icon-container'>
										<div className='icon-header'>GIT</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow backend-icon'
											icon={[ 'fab', 'git' ]}
										/>
									</div>
									<div className='icon-container'>
										<div className='icon-header'>Python</div>
										<FontAwesomeIcon
											className='technology-icon hvr-grow backend-icon'
											icon={[ 'fab', 'python' ]}
										/>
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
