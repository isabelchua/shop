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
							<small className="subtotal__gift">
								<input type="checkbox" />
								This order contains a gift
							</small>
						</p>
					</>
				)}
				decimalScale={2}
				//value={getBasketTotal(basket)}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button className="btn">Process to Checkout</button>
		</div>
	);
}

export default Subtotal;
