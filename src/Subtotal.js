import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className="subtotal">
			{/* {price} */}
			<CurrencyFormat
				renderText={value => (
					<>
						<p>
							Subtotal ({basket.length} items):{' '}
							<strong>{`${value}`}</strong>
							<p className="coupon">
								<input type="text" placeholder="Enter Coupon" />
							</p>
						</p>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button className="btn">Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
