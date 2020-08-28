import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { ReactComponent as Logo } from './img/logo.svg';

function Login() {
	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const login = e => {
		e.preventDefault(); // stops refresh

		//do login logic
		auth
			.signInWithEmailAndPassword(email, password)
			.then(auth => {
				//logged in redirect to homepage
				history.push('/');
			})
			.catch(e => alert(e.message));
	};
	const register = e => {
		e.preventDefault(); // stops refresh

		//do login logic
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(auth => {
				//create a user and login redirect to homepage
			})
			.catch(e => alert(e.message));
	};
	// const MenuIcon = (props) =>(
	// 	<svg xmlns="./img/logo.svg" fill={props.fill} className={props.class}></svg>
	// 	)
	return (
		<div className="login">
			<Link to="/">
				<Logo className="login_header__logo" fill="black" />
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
					<p>
						by signing in you agree to the Shop's Conditions of Use and
						Privacy Notice.
					</p>
					<button onClick={register} className="login__registerButton">
						Create your Account
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
