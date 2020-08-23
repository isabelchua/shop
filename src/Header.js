import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
	return (
		<div className="header">
			{/* logo */}
			<Link to="/">
				<img
					className="header__logo"
					src="https://www.mozilla.org/media/protocol/img/logos/firefox/monitor/logo-lg-high-res.3efdead4bb9a.png"
					alt=""
				/>
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
						<span className="header__optionLineOne">hello isabel</span>
						<span className="header__optionLineTwo">sign in</span>
					</div>
				</Link>
				<Link to="/login" className="header__link">
					<div className="header__option">
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
							0
						</span>
					</div>
				</Link>
			</div>

			{/* basket */}
		</div>
	);
}

export default Header;
