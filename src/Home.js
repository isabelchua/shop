import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<img
				src="https://www.w3schools.com/w3css/img_lights.jpg"
				className="home__img"
				alt=""
			/>
			<div className="home__row">
				<Product
					id="23213"
					title="Toy Car"
					price={11.99}
					rating={4}
					image="https://cdn.shopify.com/s/files/1/0149/8336/4708/products/Fire_Truck_Ladder_Down_Front_View_whitebg_20181017_1024x1024@2x.jpg"
				/>
				<Product
					id="121213"
					title="Product 2"
					price={49.99}
					rating={4}
					image="https://cdn.shopify.com/s/files/1/0149/8336/4708/products/Fire_Truck_Ladder_Down_Front_View_whitebg_20181017_1024x1024@2x.jpg"
				/>
				<Product
					id="3563"
					title="Product 3"
					price={99.99}
					rating={4}
					image="https://cdn.shopify.com/s/files/1/0149/8336/4708/products/Fire_Truck_Ladder_Down_Front_View_whitebg_20181017_1024x1024@2x.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="7573"
					title="Product 4"
					price={89.99}
					rating={4}
					image="https://cdn.shopify.com/s/files/1/0149/8336/4708/products/Fire_Truck_Ladder_Down_Front_View_whitebg_20181017_1024x1024@2x.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
