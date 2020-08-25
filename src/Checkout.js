import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';

import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
					alt=""
				/>
				{basket?.length === 0 ? (
					<div>
						<h2>Your Shopping Basket is empty</h2>
						<p>
							You have no items in your basket. Try adding items in your
							basket.
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout__title"> Shopping Basket</h2>
						{basket?.map(item => {
							//console.log('item' + item);
							return (
								<CheckoutProduct
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							);
						})}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout__right">
					<h1>Subtotal</h1>
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
