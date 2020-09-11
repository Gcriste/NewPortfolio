import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Technologies() {
	return (
		<Fade right cascade>
			<div id='technologies'>
				<div className='container technology-container'>
					<div className='row'>
						<div className='col-md-6 offset-md-5'>
							<div className='card technology-card'>
								<h2 className='text-center'>TECHNOLOGIES</h2>
								<div className='frontend-header'>
									<h3>FrontEnd </h3>
								</div>
								<div className='frontend-container'>
									<FontAwesomeIcon
										clasName='technology-icon frontend-icon'
										icon={[ 'fab', 'html5' ]}
									/>
									<div className='icon-header'>HTML</div>

									<FontAwesomeIcon
										clasName='technology-icon frontend-icon'
										icon={[ 'fab', 'css3' ]}
									/>
									<div className='icon-header'>CSS</div>

									<FontAwesomeIcon
										clasName='technology-icon frontend-icon'
										icon={[ 'fab', 'sass' ]}
									/>
									<div className='icon-header'>Sass</div>

									<FontAwesomeIcon
										clasName='technology-icon frontend-icon'
										icon={[ 'fab', 'less' ]}
									/>
									<div className='icon-header'>Less</div>

									<FontAwesomeIcon
										clasName='technology-icon frontend-icon'
										icon={[ 'fab', 'bootstrap' ]}
									/>
									<div className='icon-header'>Bootstrap</div>

									<FontAwesomeIcon clasName='technology-icon frontend-icon' icon={[ 'fab', 'js' ]} />
									<div className='icon-header'>Javascript</div>

									<FontAwesomeIcon
										clasName='technology-icon frontend-icon'
										icon={[ 'fab', 'react' ]}
									/>
									<div className='icon-header'>React</div>
								</div>
								<div className='backend-header'>
									<h3>Backend</h3>
								</div>
								<div className='backend-container'>
									<FontAwesomeIcon clasName='technology-icon backend-icon' icon={[ 'fab', 'node' ]} />
									<div className='icon-header'>Node.js</div>

									<FontAwesomeIcon
										clasName='technology-icon backend-icon'
										icon={[ 'fab', 'mysql' ]}
									/>
									<div className='icon-header'>mySQL</div>

									<FontAwesomeIcon
										clasName='technology-icon backend-icon'
										icon={[ 'fab', 'mongodb' ]}
									/>
									<div className='icon-header'>MongoDB</div>

									<FontAwesomeIcon clasName='technology-icon backend-icon' icon={[ 'fab', 'c#' ]} />
									<div className='icon-header'>C#</div>

									<FontAwesomeIcon clasName='technology-icon backend-icon' icon={[ 'fab', 'git' ]} />
									<div className='icon-header'>GIT</div>
									<FontAwesomeIcon
										clasName='technology-icon backend-icon'
										icon={[ 'fab', 'python' ]}
									/>
									<div className='icon-header'>Python</div>
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
