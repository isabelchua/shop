export const initialState = {
	//basket: ['pencil', 'pen']

	basket: [
		{
			id: '23232',
			title: 'Iphone',
			price: 899.0,
			rating: 4,
			image:
				'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-red-select-2020?wid=834&hei=1000&fmt=jpeg'
		},
		{
			id: '23232',
			title: 'Iphone',
			price: 899.0,
			rating: 4,
			image:
				'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-red-select-2020?wid=834&hei=1000&fmt=jpeg'
		}
	],
	user: null
};
//incrementing all of the prices inside the basket
export const getBasketTotal = basket =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			//add basket
			return {
				...state,
				basket: [...state.basket, action.item]
			};

		case 'REMOVE_FROM_BASKET':
			// remove
			let newBasket = [...state.basket];

			// we clone the basket
			const index = state.basket.findIndex(
				basketItem => basketItem.id === action.id
			);

			//we check to see if product exists in the basket
			if (index >= 0) {
				//items exists in basket remove it
				newBasket.splice(index, 1);
			} else {
				console.warn(`Cant remove product (id: ${action.id} as its not`);
			}
			return {
				...state,
				basket: newBasket
			};

		default:
			return state;
	}
};

export default reducer;
