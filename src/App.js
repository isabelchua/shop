import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
	const [{ user }, dispatch] = useStateValue();
	//useEffect
	// piece of code which runs based on a fiven condition

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(authUser => {
			if (authUser) {
				//the user is logged in
				dispatch({
					type: 'SET_USER',
					user: authUser
				});
			} else {
				//logged out
				dispatch({
					type: 'SET_USER',
					user: null
				});
			}
		});
		return () => {
			//any cleanup operations
			unsubscribe();
		};
	}, []);

	console.log('USER is >>>', user);

	return (
		<Router>
			<div className="app">
				<Switch>
					{/* <Route path='/checkout/:someRandomId/page'></Route> */}
					<Route path="/checkout/">
						<Header />
						<Checkout />
						<h1>Checkout</h1>
					</Route>

					<Route path="/login">
						{/* <h1>Login page</h1> */}
						<Login />
					</Route>

					<Route path="/">
						<Header />

						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
