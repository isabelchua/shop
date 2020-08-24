export const initialState = {
	//basket: ['pencil', 'pen']
	basket: [],
	user: null
};

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
			return { state };

		default:
			return state;
	}
};

export default reducer;