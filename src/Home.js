import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<img
				src="https://i.imgur.com/Ijryzli.jpg"
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
					title="Secretlab OMEGA Office Chair High Back Fabric Computer Chair Desk Chair PC Racing Executive Ergonomic Adjustable Swivel Task"
					price={359}
					rating={4}
					image="https://cdn.shopify.com/s/files/1/1640/2231/files/turntable_2020_OM_pu_stealth_8-min.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="8673"
					title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
					price={549.99}
					rating={5}
					image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_UY218_.jpg"
				/>
				<Product
					id="76508"
					title="Vulcan 100 Aimo RGB Mechanical Gaming Keyboard - Brown Switches"
					price={149.99}
					rating={5}
					image="https://m.media-amazon.com/images/I/81juk3SAbGL._AC_UY218_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="7573"
					title="NVIDIA SHIELD Android TV Pro 4K HDR Streaming Media Player; High Performance, Dolby Vision, 3GB RAM, 2x USB, Works with Alexa"
					price={198.9}
					rating={4}
					image="https://m.media-amazon.com/images/I/61rowppY2TL._AC_UL320_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="8673"
					title="Synergee Regional Olympic 20kg Men’s and 15kg Women’s Hard Chrome & Black Phosphate Barbells. Rated 1500lbs for Weightlifting"
					price={399.99}
					rating={4}
					image="https://m.media-amazon.com/images/I/711FVWqh4SL._AC_UL320_.jpg"
				/>
				<Product
					id="76508"
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
