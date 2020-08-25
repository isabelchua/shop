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
					title="Microsoft Surface Headphone with active noise cancellation "
					price={349.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/51z376z5iBL._SL1200_.jpg"
				/>
				<Product
					id="121213"
					title="RAZER Naga Epic Chroma RZ01-01230100 Black 19 Buttons Tilt Wheel USB Wired / Wireless Laser 8200 dpi MMO Gaming Mouse"
					price={124.99}
					rating={3}
					image="https://c1.neweggimages.com/ProductImage/26-153-180-01.jpg"
				/>
				<Product
					id="3563"
					title="Secretlab OMEGA"
					price={359}
					rating={4}
					image="https://cdn.shopify.com/s/files/1/1640/2231/files/turntable_2020_OM_pu_stealth_8-min.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="7573"
					title="Ritter Sport Chocolate Bar, Bittersweet Chocolate, 50 Percent Cocoa"
					price={2.99}
					rating={5}
					image="https://images.freshop.com/00050255020001/9c0f2283518f27e7d35a18687778c661_large.png"
				/>
			</div>
		</div>
	);
}

export default Home;
