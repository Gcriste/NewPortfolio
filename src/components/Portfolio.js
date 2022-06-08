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
                    <h3 className='portfolio-secondary-header'>Websites</h3>
                    <div className='row top-portfolio-section'>
                      <div className='col-lg-3 col-sm-6 col-12 image-wrapper'>
                        <div className='card well portfolio-card'>
                          <div className='card-header'>
                            <h4 className='text-center card-title'>
                              <strong>HCA Hospital</strong>
                            </h4>
                          </div>
                          <div className='card-body'>
                            <a href='#demo1' data-toggle='collapse'>
                              <img
                                src={require('./assets/tristar-new.png')}
                                className='app img-fluid'
                                alt='pic of tristar hospital'
                              />
                            </a>
                            <div id='demo1' className='collapse'>
                              {' '}
                              <div className='link-container'>
                                <a
                                  href='https://tristarhealth.com/locations/tristar-centennial/'
                                  className='portfolio-link'
                                >
                                  <h5>Live Link</h5>
                                </a>{' '}
                              </div>
                              <p className='app-description'>
                                {' '}
                                A Nashville hospital website showing information
                                for potential visitors.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-sm-6 col-12'>
                        <div className='card well portfolio-card'>
                          <div className='card-header'>
                            <h4 className='text-center card-title'>
                              <strong>RCCU</strong>
                            </h4>
                          </div>
                          <div className='card-body'>
                            <a href='#demo2' data-toggle='collapse'>
                              <img
                                src={require('./assets/rccu-new.png')}
                                className='app img-fluid'
                                alt='pic of Google'
                              />
                            </a>
                            <div id='demo2' className='collapse'>
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
                              <strong>Band Website</strong>
                            </h4>
                          </div>
                          <div className='card-body'>
                            <a href='#demo3' data-toggle='collapse'>
                              <img
                                src={require('./assets/madgoodco-new.png')}
                                className='app img-fluid'
                                alt='pic of Maddie in Good Company'
                              />
                            </a>
                            <div id='demo3' className='collapse'>
                              {' '}
                              <div className='link-container'>
                                <a
                                  href='https://www.maddieingoodcompany.com/'
                                  className='portfolio-link'
                                >
                                  <h5>Live Link</h5>
                                </a>{' '}
                                <a
                                  href='https://github.com/Gcriste/Maddie-in-Good-Company'
                                  className='portfolio-link'
                                >
                                  <h5>Github Link</h5>
                                </a>{' '}
                              </div>
                              <p className='app-description'>
                                {' '}
                                A band website for Maddie in Good Company -
                                local band from Nashville, TN.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className='portfolio-secondary-header'>Applications</h3>
                    <div className='row'>
                      <div className='col-lg-3 col-sm-6 col-12 image-wrapper'>
                        <div className='card well portfolio-card'>
                          <div className='card-header'>
                            <h4 className='text-center card-title'>
                              <strong>Weather App</strong>
                            </h4>
                          </div>
                          <div className='card-body'>
                            <a href='#demo4' data-toggle='collapse'>
                              <img
                                src={require('./assets/weather-new.png')}
                                className='app img-fluid'
                                alt='pic of weather app'
                              />
                            </a>
                            <div id='demo4' className='collapse'>
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
                      <div className='col-lg-3 col-sm-6 col-12'>
                        <div className='card well portfolio-card'>
                          <div className='card-header'>
                            <h4 className='text-center card-title'>
                              <strong>Tic-Tac-Toe</strong>
                            </h4>
                          </div>
                          <div className='card-body'>
                            <a href='#demo5' data-toggle='collapse'>
                              <img
                                src={require('./assets/tic-tac-toe-new.png')}
                                className='app img-fluid'
                                alt='pic of Google'
                              />
                            </a>
                            <div id='demo5' className='collapse'>
                              {' '}
                              <div className='link-container'>
                                <a
                                  href='https://griffins-tic-tac-toe.netlify.app/'
                                  className='portfolio-link'
                                >
                                  {' '}
                                  <h5>Live Link</h5>
                                </a>{' '}
                                <a
                                  href='https://github.com/Gcriste/Tic-tac-toe'
                                  className='portfolio-link'
                                >
                                  {' '}
                                  <h5>Github Link</h5>
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
                            <a href='#demo6' data-toggle='collapse'>
                              <img
                                src={require('./assets/gig-finder-new.png')}
                                className='app img-fluid'
                                alt='pic of gigfinder'
                              />
                            </a>
                            <div id='demo6' className='collapse'>
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
                            <a href='#demo7' data-toggle='collapse'>
                              <img
                                src={require('./assets/math-wiz-new.png')}
                                className='app img-fluid'
                                alt='pic of budget'
                              />
                            </a>
                            <div id='demo7' className='collapse'>
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
