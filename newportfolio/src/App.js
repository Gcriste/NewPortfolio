import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Nav from './components/Nav';
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
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/createaccount' component={CreateAccount} />
					<PrivateRoute exact path='/dashboard' component={Dashboard} />
					<PrivateRoute exact path='/browse' component={Browse} />
					<PrivateRoute exact path='/post' component={Post} />
					<PrivateRoute exact path='/offers/gear/:gearid' component={PostOffer} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}
export default App;
