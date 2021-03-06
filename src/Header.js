import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase.js';
import { ReactComponent as Logo } from './img/logo.svg';

function Header() {
	const [{ basket, user }] = useStateValue();

	const login = () => {
		if (user) {
			auth.signOut();
		}
	};

	console.log(basket);

	return (
		<div className="header">
			{/* logo */}

			<Link to="/">
				<div className="logo">
					<Logo className="header__logo" />
					<h2>Shop</h2>
				</div>
			</Link>

			{/* search */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			{/* 3 links */}
			<div className="header__nav">
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">
							hello {user?.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? 'sign out' : 'sign in'}{' '}
						</span>
					</div>
				</Link>
				<Link to={!user && '/login'} className="header__link">
					<div onClick={login} className="header__option">
						<span className="header__optionLineOne">returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link to="checkout" className="header__link">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>

			{/* basket */}
		</div>
	);
}

export default Header;
