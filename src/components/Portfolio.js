import React from 'react';
import Slide from 'react-reveal/Slide';

function Portfolio() {
  return (
    <Slide bottom cascade>
      <div id='portfolio'>
        <div className='container portfolio-container'>
          <div className='row'>
            <div className='col-lg-12 col-12'>
              <div className=''>
                <h2 className='text-center portfolio-header block_title'>
                  Portfolio
                </h2>
                <div className='className bg-2'>
                  <div className='container text-center'>
                    <div className='row'>
                      <div className='col-lg-3 col-sm-6 col-12 image-wrapper'>
                        <div className='card well portfolio-card'>
                          <div className='card-header'>
                            <h4 className='text-center card-title'>
                              <strong>Weather App</strong>
                            </h4>
                          </div>
                          <div className='card-body'>
                            <a href='#demo2' data-toggle='collapse'>
                              <img
                                src={require('./assets/weather-app-three.png')}
                                className='app img-fluid hvr-fade'
                                alt='pic of weather app'
                              />
                            </a>
                            <div id='demo2' className='collapse'>
                              {' '}
                              <div className='link-container'>
                                <a
                                  href='https://mystifying-tereshkova-c85a7c.netlify.app/'
                                  className='portfolio-link'
                                >
                                  <h5>Live Link</h5>
                                </a>{' '}
                                <a
                                  href='https://github.com/Gcriste/weather-app'
                                  className='portfolio-link'
                                >
                                  {' '}
                                  <h5>GitHub Link</h5>
                                </a>
                              </div>
                              <p className='app-description'>
                                {' '}
                                A weather app that uses the Open Weather API to
                                display current and future weather based on a
                                city searched by the user. Uses technologies
                                such as React, Javascript, CSS, etc.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-sm-6 col-12 image-wrapper '>
                        <div className='card well portfolio-card'>
                          <div className='card-header'>
                            <h4 className='text-center card-title'>
                              <strong>RCCU</strong>
                            </h4>
                          </div>
                          <div className='card-body'>
                            <a href='#demo' data-toggle='collapse'>
                              <img
                                src={require('./assets/RCCU.png')}
                                className='app img-fluid hvr-fade'
                                alt='pic of Google'
                              />
                            </a>
                            <div id='demo' className='collapse'>
                              {' '}
                              <div className='link-container'>
                                <a
                                  href='https://www.rccu.com/'
                                  className='portfolio-link'
                                >
                                  {' '}
                                  <h5>Live Link</h5>
                                </a>{' '}
                              </div>
                              <p className='app-description'>
                                A website built for Rural Community Credit Union
                                that uses technologies such as squarespace,
                                javascript, css and more.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-sm-6 col-12 image-wrapper'>
                        <div className='card well portfolio-card'>
                          <div className='card-header'>
                            <h4 className='text-center card-title'>
                              <strong>Gig Finder </strong>
                            </h4>
                          </div>
                          <div className='card-body'>
                            <a href='#demo3' data-toggle='collapse'>
                              <img
                                src={require('./assets/GigFinder.png')}
                                className='app img-fluid hvr-fade'
                                alt='pic of gigfinder'
                              />
                            </a>
                            <div id='demo3' className='collapse'>
                              {' '}
                              <div className='link-container'>
                                <a
                                  href='https://newgigfinder.herokuapp.com/'
                                  className='portfolio-link'
                                >
                                  <h5>Live Link</h5>
                                </a>{' '}
                                <a
                                  href='https://github.com/Gcriste/NewGigFinder'
                                  className='portfolio-link'
                                >
                                  {' '}
                                  <h5>GitHub Link</h5>
                                </a>
                              </div>
                              <p className='app-description'>
                                A Gig Finder app that helps musicians find
                                available future gigs.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-sm-6 col-12 image-wrapper'>
                        <div className='card well portfolio-card'>
                          <div className='card-header'>
                            <h4 className='text-center card-title'>
                              <strong>Math Whiz</strong>
                            </h4>
                          </div>
                          <div className='card-body'>
                            <a href='#demo4' data-toggle='collapse'>
                              <img
                                src={require('./assets/MathWhiz.png')}
                                className='app img-fluid hvr-fade'
                                alt='pic of budget'
                              />
                            </a>
                            <div id='demo4' className='collapse'>
                              {' '}
                              <div className='link-container'>
                                <a
                                  href='https://math-whiz.herokuapp.com/'
                                  className='portfolio-link'
                                >
                                  {' '}
                                  <h5>Live Link</h5>
                                </a>{' '}
                                <a
                                  href='https://github.com/Gcriste/Times-Tables'
                                  className='portfolio-link'
                                >
                                  {' '}
                                  <h5>GitHub Link </h5>
                                </a>
                              </div>
                              <p className='app-description'>
                                A simple app to help children work on their
                                addition, subtraction, multiplication and
                                division skills.
                              </p>
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
        </div>
      </div>
    </Slide>
  );
}

export default Portfolio;
