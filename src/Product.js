import React from 'react';

import { useStateValue } from './StateProvider';
import {
	NotificationContainer,
	NotificationManager
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './Product.css';

function Product({ id, title, image, price, rating }) {
	const [{}, dispatch] = useStateValue();

	const addToBasket = () => {
		NotificationManager.success('Added to basket!', title);

		//add item to basket
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				// id: id,
				// title: title,
				// image: image,
				// price: price,
				// rating: rating
				id,
				title,
				image,
				price,
				rating
			}
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map(_ => (
							//eslint-disable-next-line
							<span role="img">⭐</span>
						))}
				</div>
			</div>

			<img src={image} alt="" />
			<button className="btn" onClick={addToBasket}>
				Add to basket
			</button>
			<NotificationContainer />
		</div>
	);
}

export default Product;
