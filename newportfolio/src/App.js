import React from 'react';
import './App.css';

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
			<div>
				<Nav />
				<Header />
				<About />
				<Portfolio />
				<Technologies />
				<Contact />
				<Footer />
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
