import React from 'react';
import './App.css';
import './hover.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

function App() {
	return (
		<Router>
			<div class='body-container'>
				<Nav exact path='/#nav' component={Nav} />
				<Header exact path='/#header' component={Header} />
				<About exact path='/#about' component={About} />
				<Portfolio exact path='/#portfolio' component={Portfolio} />
				<Technologies exact path='/#technologies' component={Technologies} />
				<Contact exact path='/#contact' component={Contact} />
				<Footer exact path='/#footer' component={Footer} />
				<Switch>
					{/* <Route exact path='/' component={Nav} /> */}
					{/* <Route component={NoMatch} /> */}
					{/* <Route exact path='/' component={Nav} /> */}
					{/* <Route exact path='/header' component={Header} />
					<Route exact path='/about' component={About} />
					<Route exact path='/portfolio' component={Portfolio} />
					<Route exact path='/technologies' component={Technologies} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/footer' component={Footer} /> */}
				</Switch>
			</div>
		</Router>
	);
}
export default App;
