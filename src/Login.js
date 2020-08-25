import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const login = e => {
		e.preventDefault(); // stops refresh

		//do login logic
		auth
			.signInWithEmailAndPassword(email, password)
			.then(auth => {
				//logged in redirect to homepage
			})
			.catch(e => alert(e.message));
	};
	const register = e => {
		e.preventDefault(); // stops refresh

		//do login logic
		auth.createUserWithEmailAndPassword(email, password);
		then(auth => {
			//create a user and login redirect to homepage
		}).catch(e => alert(e.message));
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>
				<form>
					<h5>Email</h5>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						type="email"
					></input>
					<h5>Password</h5>
					<input
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
					></input>
					<button
						onClick={login}
						type="submit"
						className="login__signInButton"
					>
						Sign In
					</button>
					<p>by signing in you agree to amazon's conditions</p>
					<button onClick={register} className="login__registerButton">
						Create your Amazon Account
					</button>
				</form>
			</div>
			<h1>Login Page</h1>
		</div>
	);
}

export default Login;
